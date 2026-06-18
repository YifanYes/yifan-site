import type { Locale } from './i18n';

export const SITE_TITLE = 'Yifan';

export const SITE_COPY: Record<Locale, { titleTemplate: string }> = {
	en: {
		titleTemplate: '%s // Yifan',
	},
	es: {
		titleTemplate: '%s // Yifan',
	},
};

export const HOME_COPY: Record<
	Locale,
	{
		metaTitle: string;
		description: string;
		moduleLabel: string;
		eyebrow: string;
		title: string;
		lede: string;
		statusLabel: string;
		statusItems: string[];
		languageLabel: string;
	}
> = {
	en: {
		metaTitle: 'Systems Workbench',
		description:
			'Engineering, product systems, philosophy, productivity, martial arts, curated notes, and selected projects from Yifan.',
		moduleLabel: 'WORKBENCH.001 //',
		eyebrow: 'PUBLIC WORKING SURFACE',
		title: 'Engineering, product systems, philosophy, productivity, and disciplined practice.',
		lede:
			'A bilingual personal site is taking shape around writing, notes, documents, and selected projects. English is the source locale; Spanish translations live beside it from the start.',
		statusLabel: 'FOUNDATION',
		statusItems: ['Locale routes: /en and /es', 'Root redirect: / -> /en/', 'Translation model: one content entry per locale'],
		languageLabel: 'Language',
	},
	es: {
		metaTitle: 'Mesa de Sistemas',
		description:
			'Ingeniería, sistemas de producto, filosofía, productividad, artes marciales, notas curadas y proyectos seleccionados de Yifan.',
		moduleLabel: 'WORKBENCH.001 //',
		eyebrow: 'SUPERFICIE PUBLICA DE TRABAJO',
		title: 'Ingeniería, sistemas de producto, filosofía, productividad y práctica disciplinada.',
		lede:
			'Un sitio personal bilingüe empieza a tomar forma alrededor de escritura, notas, documentos y proyectos seleccionados. El inglés es el idioma fuente; las traducciones al español viven junto a él desde el inicio.',
		statusLabel: 'BASE',
		statusItems: ['Rutas por idioma: /en y /es', 'Redirección raíz: / -> /en/', 'Modelo de traducción: una entrada de contenido por idioma'],
		languageLabel: 'Idioma',
	},
};
