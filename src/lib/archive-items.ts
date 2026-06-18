import type { CollectionEntry } from 'astro:content';

type ArchiveEntry =
	| CollectionEntry<'documents'>
	| CollectionEntry<'notes'>
	| CollectionEntry<'now'>
	| CollectionEntry<'projects'>
	| CollectionEntry<'writing'>;

export function byNewestEntry(left: ArchiveEntry, right: ArchiveEntry): number {
	return right.data.date.getTime() - left.data.date.getTime();
}

export function toArchiveItem(entry: ArchiveEntry) {
	return {
		title: entry.data.title,
		description: entry.data.description,
		date: entry.data.date,
		area: entry.data.area,
		status: entry.data.status,
		tags: entry.data.tags,
	};
}
