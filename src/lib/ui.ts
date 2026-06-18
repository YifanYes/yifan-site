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

export const NAV_COPY: Record<
	Locale,
	{
		primaryLabel: string;
		languageLabel: string;
		homeLabel: string;
		skipLabel: string;
		links: { label: string; path: string }[];
	}
> = {
	en: {
		primaryLabel: 'Primary',
		languageLabel: 'Language',
		homeLabel: 'Yifan home',
		skipLabel: 'Skip to content',
		links: [
			{ label: 'Now', path: '/now' },
			{ label: 'Writing', path: '/writing' },
			{ label: 'Notes', path: '/notes' },
			{ label: 'Documents', path: '/documents' },
			{ label: 'Projects', path: '/projects' },
			{ label: 'About', path: '/about' },
		],
	},
	es: {
		primaryLabel: 'Principal',
		languageLabel: 'Idioma',
		homeLabel: 'Inicio de Yifan',
		skipLabel: 'Saltar al contenido',
		links: [
			{ label: 'Ahora', path: '/now' },
			{ label: 'Escritura', path: '/writing' },
			{ label: 'Notas', path: '/notes' },
			{ label: 'Documentos', path: '/documents' },
			{ label: 'Proyectos', path: '/projects' },
			{ label: 'Acerca', path: '/about' },
		],
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
	},
};

type ArchivePage = 'now' | 'writing' | 'notes' | 'documents' | 'projects';

type ArchivePageCopy = {
	metaTitle: string;
	description: string;
	moduleLabel: string;
	kicker: string;
	title: string;
	listLabel: string;
	empty: string;
};

export const ARCHIVE_COPY: Record<Locale, Record<ArchivePage, ArchivePageCopy>> = {
	en: {
		now: {
			metaTitle: 'Now',
			description: 'Current building, studying, training, and thinking from Yifan.',
			moduleLabel: 'NOW.001 //',
			kicker: 'CURRENT WORK',
			title: 'What is active now.',
			listLabel: 'CURRENT ENTRIES //',
			empty: 'No current entries are published yet.',
		},
		writing: {
			metaTitle: 'Writing',
			description: 'Long-form articles and essays on engineering, product, philosophy, productivity, and practice.',
			moduleLabel: 'ARTICLE.INDEX //',
			kicker: 'LONG-FORM ARCHIVE',
			title: 'Articles and essays.',
			listLabel: 'PUBLISHED ARTICLES //',
			empty: 'No articles are published yet.',
		},
		notes: {
			metaTitle: 'Notes',
			description: 'Curated shorter notes, working models, references, and Obsidian exports.',
			moduleLabel: 'NOTE.INDEX //',
			kicker: 'CURATED NOTES',
			title: 'Shorter useful artifacts.',
			listLabel: 'PUBLISHED NOTES //',
			empty: 'No notes are published yet.',
		},
		documents: {
			metaTitle: 'Documents',
			description: 'Longer documents, study notes, PDFs, and structured artifacts.',
			moduleLabel: 'DOC.INDEX //',
			kicker: 'DOCUMENT ARCHIVE',
			title: 'Documents and study artifacts.',
			listLabel: 'PUBLISHED DOCUMENTS //',
			empty: 'No documents are published yet.',
		},
		projects: {
			metaTitle: 'Projects',
			description: 'Selected projects, systems, prototypes, and case studies from Yifan.',
			moduleLabel: 'PROJECT.INDEX //',
			kicker: 'SYSTEMS AND EXPERIMENTS',
			title: 'Projects and case studies.',
			listLabel: 'SELECTED PROJECTS //',
			empty: 'No projects are published yet.',
		},
	},
	es: {
		now: {
			metaTitle: 'Ahora',
			description: 'Construcción, estudio, entrenamiento y preguntas activas de Yifan.',
			moduleLabel: 'NOW.001 //',
			kicker: 'TRABAJO ACTUAL',
			title: 'Lo que está activo ahora.',
			listLabel: 'ENTRADAS ACTUALES //',
			empty: 'Todavía no hay entradas actuales publicadas.',
		},
		writing: {
			metaTitle: 'Escritura',
			description: 'Artículos y ensayos sobre ingeniería, producto, filosofía, productividad y práctica.',
			moduleLabel: 'ARTICLE.INDEX //',
			kicker: 'ARCHIVO LARGO',
			title: 'Artículos y ensayos.',
			listLabel: 'ARTÍCULOS PUBLICADOS //',
			empty: 'Todavía no hay artículos publicados.',
		},
		notes: {
			metaTitle: 'Notas',
			description: 'Notas cortas curadas, modelos de trabajo, referencias y exportaciones de Obsidian.',
			moduleLabel: 'NOTE.INDEX //',
			kicker: 'NOTAS CURADAS',
			title: 'Artefactos breves y útiles.',
			listLabel: 'NOTAS PUBLICADAS //',
			empty: 'Todavía no hay notas publicadas.',
		},
		documents: {
			metaTitle: 'Documentos',
			description: 'Documentos largos, notas de estudio, PDFs y artefactos estructurados.',
			moduleLabel: 'DOC.INDEX //',
			kicker: 'ARCHIVO DOCUMENTAL',
			title: 'Documentos y artefactos de estudio.',
			listLabel: 'DOCUMENTOS PUBLICADOS //',
			empty: 'Todavía no hay documentos publicados.',
		},
		projects: {
			metaTitle: 'Proyectos',
			description: 'Proyectos seleccionados, sistemas, prototipos y casos de estudio de Yifan.',
			moduleLabel: 'PROJECT.INDEX //',
			kicker: 'SISTEMAS Y EXPERIMENTOS',
			title: 'Proyectos y casos de estudio.',
			listLabel: 'PROYECTOS SELECCIONADOS //',
			empty: 'Todavía no hay proyectos publicados.',
		},
	},
};

export const ABOUT_COPY: Record<
	Locale,
	{
		metaTitle: string;
		description: string;
		moduleLabel: string;
		kicker: string;
		title: string;
		lede: string;
		specLabel: string;
		specs: { label: string; value: string | string[] }[];
	}
> = {
	en: {
		metaTitle: 'About',
		description: 'Bio, areas of interest, taste, contact links, and collaboration surface for Yifan.',
		moduleLabel: 'ABOUT.001 //',
		kicker: 'BIO AND SURFACE AREA',
		title: 'A builder working through systems, practice, and product judgment.',
		lede:
			'This page is the public orientation layer for Yifan: engineering work, product thinking, disciplined practice, and the artifacts that make the work legible.',
		specLabel: 'AREAS //',
		specs: [
			{ label: '01', value: 'Engineering and product systems' },
			{ label: '02', value: 'Philosophy, productivity, and disciplined practice' },
			{ label: '03', value: ['Covenant', 'Writing', 'Curated notes'] },
		],
	},
	es: {
		metaTitle: 'Acerca',
		description: 'Bio, áreas de interés, gusto, enlaces de contacto y superficie de colaboración de Yifan.',
		moduleLabel: 'ABOUT.001 //',
		kicker: 'BIO Y SUPERFICIE',
		title: 'Un constructor trabajando entre sistemas, práctica y criterio de producto.',
		lede:
			'Esta página es la capa pública de orientación para Yifan: trabajo de ingeniería, pensamiento de producto, práctica disciplinada y artefactos que hacen legible el trabajo.',
		specLabel: 'ÁREAS //',
		specs: [
			{ label: '01', value: 'Ingeniería y sistemas de producto' },
			{ label: '02', value: 'Filosofía, productividad y práctica disciplinada' },
			{ label: '03', value: ['Covenant', 'Escritura', 'Notas curadas'] },
		],
	},
};
