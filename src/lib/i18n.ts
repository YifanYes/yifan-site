export const LOCALES = ['en', 'es'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';
export const SOURCE_LOCALE: Locale = 'en';

export const TRANSLATION_STRATEGY =
	'one-file-per-locale with translationOf frontmatter links' as const;

export const LOCALE_LABELS: Record<Locale, string> = {
	en: 'English',
	es: 'Español',
};

export const LOCALE_METADATA: Record<Locale, { htmlLang: string; hreflang: string }> = {
	en: {
		htmlLang: 'en',
		hreflang: 'en',
	},
	es: {
		htmlLang: 'es',
		hreflang: 'es',
	},
};

export const ROUTE_PREFIXES: Record<Locale, `/${Locale}`> = {
	en: '/en',
	es: '/es',
};

export type AlternateLink = {
	locale: Locale | 'x-default';
	label: string;
	hreflang: string;
	path: string;
};

export function isLocale(value: string | undefined): value is Locale {
	return LOCALES.includes(value as Locale);
}

export function getLocalizedPath(locale: Locale, path = '/'): string {
	const cleanPath = stripLocalePrefix(path);
	const suffix = cleanPath === '/' ? '' : cleanPath;

	return `${ROUTE_PREFIXES[locale]}${suffix}/`.replace(/\/{2,}/g, '/');
}

export function stripLocalePrefix(path: string): string {
	const pathname = path.startsWith('/') ? path : `/${path}`;
	const segments = pathname.split('/').filter(Boolean);

	if (isLocale(segments[0])) {
		const remaining = segments.slice(1).join('/');
		return remaining ? `/${remaining}` : '/';
	}

	return pathname || '/';
}

export function getAlternateLinks(path: string): AlternateLink[] {
	const localizedAlternates = LOCALES.map((locale) => ({
		locale,
		label: LOCALE_LABELS[locale],
		hreflang: LOCALE_METADATA[locale].hreflang,
		path: getLocalizedPath(locale, path),
	}));

	return [
		...localizedAlternates,
		{
			locale: 'x-default' as const,
			label: LOCALE_LABELS[DEFAULT_LOCALE],
			hreflang: 'x-default',
			path: '/',
		},
	];
}

export function getAbsoluteUrl(path: string, site: URL | undefined, currentUrl: URL): string {
	if (site) {
		return new URL(path, site).toString();
	}

	if (import.meta.env.DEV) {
		return new URL(path, currentUrl.origin).toString();
	}

	return path;
}
