import type { CollectionEntry } from 'astro:content';

type ArchiveEntry =
	| CollectionEntry<'articles'>
	| CollectionEntry<'documents'>
	| CollectionEntry<'notes'>
	| CollectionEntry<'now'>
	| CollectionEntry<'projects'>;

const routeSegments: Record<ArchiveEntry['collection'], string> = {
	articles: 'articles',
	documents: 'documents',
	notes: 'notes',
	now: 'now',
	projects: 'projects',
};

export function byNewestEntry(left: ArchiveEntry, right: ArchiveEntry): number {
	return right.data.date.getTime() - left.data.date.getTime();
}

export function toArchiveItem(entry: ArchiveEntry) {
	const slug = entry.id.split('/').slice(1).join('/');

	return {
		title: entry.data.title,
		description: entry.data.description,
		date: entry.data.date,
		area: entry.data.area,
		status: entry.data.status,
		tags: entry.data.tags,
		href: `/${entry.data.locale}/${routeSegments[entry.collection]}/${slug}/`,
		locale: entry.data.locale,
	};
}
