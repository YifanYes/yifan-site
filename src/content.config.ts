import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { LOCALES } from './lib/i18n';

const localeSchema = z.enum(LOCALES);

const areaSchema = z.enum([
	'engineering',
	'product',
	'philosophy',
	'faith',
	'productivity',
	'martial-arts',
	'finance',
	'notes',
]);

const statusSchema = z.enum(['draft', 'published', 'active', 'paused', 'archived', 'evergreen']);
const recommendationMediumSchema = z.enum([
	'book',
	'course',
	'movie',
	'anime',
	'manga',
	'video-game',
	'podcast',
	'tool',
	'article',
	'video',
	'other',
]);

const baseContentSchema = {
	title: z.string().min(1),
	description: z.string().min(1),
	date: z.coerce.date(),
	area: areaSchema,
	tags: z.array(z.string().min(1)),
	draft: z.boolean(),
	locale: localeSchema,
	source: z.string().min(1).optional(),
	curated: z.boolean().optional(),
	featured: z.boolean().optional(),
	status: statusSchema.optional(),
	coverImage: z.url().optional(),
	originalUrl: z.url().optional(),
	related: z.array(z.string().min(1)).optional(),
	translationOf: z.string().min(1).optional(),
};

const contentLoader = (collection: string) =>
	glob({
		base: `./src/content/${collection}`,
		pattern: '**/*.{md,mdx}',
	});

const articles = defineCollection({
	loader: contentLoader('articles'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('article'),
	}),
});

const areas = defineCollection({
	loader: contentLoader('areas'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('area'),
	}),
});

const notes = defineCollection({
	loader: contentLoader('notes'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('note'),
	}),
});

const documents = defineCollection({
	loader: contentLoader('documents'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('document'),
	}),
});

const projects = defineCollection({
	loader: contentLoader('projects'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('project'),
	}),
});

const recommendations = defineCollection({
	loader: contentLoader('recommendations'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('recommendation'),
		medium: recommendationMediumSchema,
		recommendedFor: z.array(z.string().min(1)).optional(),
	}),
});

const now = defineCollection({
	loader: contentLoader('now'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('now'),
	}),
});

const cv = defineCollection({
	loader: contentLoader('cv'),
	schema: z.object({
		...baseContentSchema,
		type: z.literal('cv'),
	}),
});

export const collections = {
	articles,
	areas,
	notes,
	documents,
	projects,
	recommendations,
	now,
	cv,
};
