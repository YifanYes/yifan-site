import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const contentRoot = path.join(process.cwd(), 'src', 'content');
const collectionNames = ['articles', 'notes', 'documents', 'projects', 'now'];
const collections = new Set(collectionNames);
const locales = new Set(['en', 'es']);
const contentExtensions = new Set(['.md', '.mdx']);

const entries = [];
const errors = [];

async function walk(dir) {
	const dirents = await readdir(dir, { withFileTypes: true });
	const files = await Promise.all(
		dirents.map(async (dirent) => {
			const fullPath = path.join(dir, dirent.name);

			if (dirent.isDirectory()) {
				return walk(fullPath);
			}

			if (dirent.isFile() && contentExtensions.has(path.extname(dirent.name))) {
				return [fullPath];
			}

			return [];
		}),
	);

	return files.flat();
}

function parseFrontmatter(source, filePath) {
	if (!source.startsWith('---\n')) {
		errors.push(`${filePath}: missing frontmatter block`);
		return {};
	}

	const end = source.indexOf('\n---', 4);

	if (end === -1) {
		errors.push(`${filePath}: unterminated frontmatter block`);
		return {};
	}

	return parseYamlSubset(source.slice(4, end), filePath);
}

function parseYamlSubset(frontmatter, filePath) {
	const data = {};

	for (const [index, line] of frontmatter.split('\n').entries()) {
		const trimmed = line.trim();

		if (!trimmed || trimmed.startsWith('#')) {
			continue;
		}

		const separatorIndex = trimmed.indexOf(':');

		if (separatorIndex === -1) {
			errors.push(`${filePath}:${index + 1}: unsupported frontmatter line`);
			continue;
		}

		const key = trimmed.slice(0, separatorIndex).trim();
		const rawValue = trimmed.slice(separatorIndex + 1).trim();
		data[key] = parseValue(rawValue);
	}

	return data;
}

function parseValue(rawValue) {
	if (rawValue.startsWith('[') && rawValue.endsWith(']')) {
		return splitInlineArray(rawValue.slice(1, -1)).map(parseValue);
	}

	if (
		(rawValue.startsWith('"') && rawValue.endsWith('"')) ||
		(rawValue.startsWith("'") && rawValue.endsWith("'"))
	) {
		return rawValue.slice(1, -1);
	}

	if (rawValue === 'true') {
		return true;
	}

	if (rawValue === 'false') {
		return false;
	}

	return rawValue;
}

function splitInlineArray(value) {
	const items = [];
	let current = '';
	let quote = '';

	for (const char of value) {
		if ((char === '"' || char === "'") && !quote) {
			quote = char;
			current += char;
			continue;
		}

		if (char === quote) {
			quote = '';
			current += char;
			continue;
		}

		if (char === ',' && !quote) {
			items.push(current.trim());
			current = '';
			continue;
		}

		current += char;
	}

	if (current.trim()) {
		items.push(current.trim());
	}

	return items;
}

function getEntryInfo(filePath, data) {
	const relativePath = path.relative(contentRoot, filePath);
	const [collection, locale] = relativePath.split(path.sep);
	const extension = path.extname(relativePath);
	const id = relativePath.slice(collection.length + 1, -extension.length).split(path.sep).join('/');
	const ref = `${collection}/${id}`;

	return { collection, locale, id, ref, relativePath, data };
}

function assertStringArray(value, filePath, field) {
	if (value === undefined) {
		return [];
	}

	if (!Array.isArray(value) || value.some((item) => typeof item !== 'string' || item.length === 0)) {
		errors.push(`${filePath}: ${field} must be an inline array of non-empty strings`);
		return [];
	}

	return value;
}

function validateEntry(entry) {
	const { collection, locale, ref, relativePath, data } = entry;
	const label = path.join('src', 'content', relativePath);

	if (!collections.has(collection)) {
		errors.push(`${label}: unknown collection "${collection}"`);
	}

	if (!locales.has(locale)) {
		errors.push(`${label}: expected locale directory to be one of ${[...locales].join(', ')}`);
	}

	if (data.locale !== locale) {
		errors.push(`${label}: frontmatter locale "${data.locale}" must match directory "${locale}"`);
	}

	for (const relatedRef of assertStringArray(data.related, label, 'related')) {
		if (!entryRefs.has(relatedRef)) {
			errors.push(`${label}: related target "${relatedRef}" does not exist`);
		}
	}

	if (data.translationOf !== undefined) {
		if (typeof data.translationOf !== 'string' || data.translationOf.length === 0) {
			errors.push(`${label}: translationOf must be a non-empty string`);
		} else if (!entryRefs.has(data.translationOf)) {
			errors.push(`${label}: translationOf target "${data.translationOf}" does not exist`);
		} else if (data.translationOf === ref) {
			errors.push(`${label}: translationOf cannot point to itself`);
		}
	}
}

const files = (await Promise.all(collectionNames.map((collection) => walk(path.join(contentRoot, collection))))).flat();

for (const filePath of files) {
	const source = await readFile(filePath, 'utf8');
	const data = parseFrontmatter(source, filePath);
	entries.push(getEntryInfo(filePath, data));
}

const entryRefs = new Set(entries.map((entry) => entry.ref));

for (const entry of entries) {
	validateEntry(entry);
}

if (errors.length > 0) {
	console.error('Content validation failed:');

	for (const error of errors) {
		console.error(`- ${error}`);
	}

	process.exit(1);
}

console.log(`Content validation passed for ${entries.length} entries.`);
