import type { CollectionEntry } from 'astro:content';
import { LOCALE_LABELS, type AlternateLink } from './i18n';

type TranslatedCollection = 'articles' | 'notes' | 'projects' | 'recommendations';

type TranslatedEntry<Collection extends TranslatedCollection> = CollectionEntry<Collection>;

export function getContentPath<Collection extends TranslatedCollection>(
	entry: TranslatedEntry<Collection>,
	collection: Collection,
) {
	const slug = entry.id.split('/').slice(1).join('/');

	return `/${entry.data.locale}/${collection}/${slug}/`;
}

export function getContentAlternates<Collection extends TranslatedCollection>(
	entry: TranslatedEntry<Collection>,
	entries: TranslatedEntry<Collection>[],
	collection: Collection,
): AlternateLink[] {
	const currentRef = `${collection}/${entry.id}`;
	const sourceRef = entry.data.translationOf ?? currentRef;
	const translations = entries.filter((candidate) => {
		const candidateRef = `${collection}/${candidate.id}`;

		return candidateRef === sourceRef || candidate.data.translationOf === sourceRef;
	});
	const links = translations.map((candidate) => ({
		locale: candidate.data.locale,
		label: LOCALE_LABELS[candidate.data.locale],
		hreflang: candidate.data.locale,
		path: getContentPath(candidate, collection),
	}));
	const defaultEntry = translations.find((candidate) => candidate.data.locale === 'en') ?? entry;

	return [
		...links,
		{
			locale: 'x-default',
			label: LOCALE_LABELS[defaultEntry.data.locale],
			hreflang: 'x-default',
			path: getContentPath(defaultEntry, collection),
		},
	];
}
