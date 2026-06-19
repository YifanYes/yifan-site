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
		sidebar: {
			collapseLabel: string;
			expandLabel: string;
			collapseText: string;
			expandText: string;
		};
		themeLabel: string;
		theme: {
			light: string;
			dark: string;
			switchToLight: string;
			switchToDark: string;
		};
		links: { label: string; path: string }[];
	}
> = {
	en: {
		primaryLabel: 'Primary',
		languageLabel: 'Language',
		homeLabel: 'Yifan home',
		skipLabel: 'Skip to content',
		sidebar: {
			collapseLabel: 'Collapse sidebar',
			expandLabel: 'Expand sidebar',
			collapseText: 'Collapse',
			expandText: 'Expand',
		},
		themeLabel: 'Theme',
		theme: {
			light: 'Light',
			dark: 'Dark',
			switchToLight: 'Switch to light theme',
			switchToDark: 'Switch to dark theme',
		},
		links: [
			{ label: 'Articles', path: '/articles' },
			{ label: 'Areas', path: '/areas' },
			{ label: 'Notes', path: '/notes' },
			{ label: 'Recommendations', path: '/recommendations' },
			{ label: 'Projects', path: '/projects' },
			{ label: 'CV', path: '/cv' },
		],
	},
	es: {
		primaryLabel: 'Principal',
		languageLabel: 'Idioma',
		homeLabel: 'Inicio de Yifan',
		skipLabel: 'Saltar al contenido',
		sidebar: {
			collapseLabel: 'Colapsar barra lateral',
			expandLabel: 'Expandir barra lateral',
			collapseText: 'Colapsar',
			expandText: 'Expandir',
		},
		themeLabel: 'Tema',
		theme: {
			light: 'Claro',
			dark: 'Oscuro',
			switchToLight: 'Cambiar al tema claro',
			switchToDark: 'Cambiar al tema oscuro',
		},
		links: [
			{ label: 'Artículos', path: '/articles' },
			{ label: 'Áreas', path: '/areas' },
			{ label: 'Notas', path: '/notes' },
			{ label: 'Recomendaciones', path: '/recommendations' },
			{ label: 'Proyectos', path: '/projects' },
			{ label: 'CV', path: '/cv' },
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
		status: { label: string; value: string | string[] }[];
		socialLabel: string;
		socialLinks: { label: string; href: string }[];
		projectsLabel: string;
		projects: { title: string; description: string; path?: string; href?: string }[];
		studyingLabel: string;
		studying: string[];
		guideLabel: string;
		guide: { title: string; description: string; path: string }[];
	}
> = {
	en: {
		metaTitle: 'Yifan',
		description:
			'Personal website for Yifan: writing, study notes, recommendations, projects, and a professional CV.',
		moduleLabel: 'PROFILE.001 //',
		eyebrow: 'PERSONAL WEBSITE',
		title: 'Yifan Ye Zhang',
		lede:
			'I write, build, and study across software engineering, product systems, philosophy, martial arts, finance, and disciplined practice.',
		statusLabel: 'CURRENTLY //',
		status: [
			{ label: 'Work', value: 'Software engineer at Signe' },
			{ label: 'Building', value: ['Covenant', 'Spanish Advanced Drones', 'Philosophy book', 'Martial arts book'] },
			{ label: 'Studying', value: ['Designing Data-Intensive Applications', 'Code Simplicity', 'UX'] },
		],
		socialLabel: 'SOCIAL //',
		socialLinks: [
			{ label: 'X', href: 'https://x.com/yifan_yz' },
			{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/yifan-ye-zhang/' },
			{ label: 'GitHub', href: 'https://github.com/YifanYes' },
		],
		projectsLabel: 'CURRENT PROJECTS //',
		projects: [
			{
				title: 'Covenant',
				description: 'A productivity RPG where real tasks become mana for tactical quests.',
				href: 'https://covenantrpg.com/',
			},
			{
				title: 'Spanish Advanced Drones',
				description: 'Drone work and advanced aerial services in Spain.',
				href: 'https://www.spanish-advanced-drones.com/',
			},
			{
				title: 'Philosophy book',
				description: 'An early writing project about philosophy, character, discipline, and how to live.',
				path: '/projects/philosophy-book',
			},
			{
				title: 'Martial arts book',
				description: 'An early writing project about martial arts, training, pressure, and practice.',
				path: '/projects/martial-arts-book',
			},
		],
		studyingLabel: 'CURRENTLY STUDYING //',
		studying: ['Designing Data-Intensive Applications', 'Code Simplicity', 'UX'],
		guideLabel: 'SITE MAP //',
		guide: [
			{ title: 'Articles', description: 'Polished long-form writing and developed arguments.', path: '/articles' },
			{ title: 'Areas', description: 'Topic hubs that connect writing, notes, recommendations, and projects.', path: '/areas' },
			{ title: 'Notes', description: 'Study notes from books, courses, resources, and active learning.', path: '/notes' },
			{ title: 'Recommendations', description: 'Curated favorite books, media, courses, tools, and games.', path: '/recommendations' },
			{ title: 'Projects', description: 'Things I am building, attempting, testing, or writing.', path: '/projects' },
			{ title: 'CV', description: 'A practical professional profile for recruiters and collaborators.', path: '/cv' },
		],
	},
	es: {
		metaTitle: 'Yifan',
		description:
			'Sitio personal de Yifan: artículos, notas de estudio, recomendaciones, proyectos y CV profesional.',
		moduleLabel: 'PROFILE.001 //',
		eyebrow: 'SITIO PERSONAL',
		title: 'Yifan Ye Zhang',
		lede:
			'Escribo, construyo y estudio entre ingeniería de software, sistemas de producto, filosofía, artes marciales, finanzas y práctica disciplinada.',
		statusLabel: 'AHORA //',
		status: [
			{ label: 'Trabajo', value: 'Software engineer en Signe' },
			{ label: 'Construyendo', value: ['Covenant', 'Spanish Advanced Drones', 'Libro de filosofía', 'Libro de artes marciales'] },
			{ label: 'Estudiando', value: ['Designing Data-Intensive Applications', 'Code Simplicity', 'UX'] },
		],
		socialLabel: 'SOCIAL //',
		socialLinks: [
			{ label: 'X', href: 'https://x.com/yifan_yz' },
			{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/yifan-ye-zhang/' },
			{ label: 'GitHub', href: 'https://github.com/YifanYes' },
		],
		projectsLabel: 'PROYECTOS ACTUALES //',
		projects: [
			{
				title: 'Covenant',
				description: 'Un RPG de productividad donde tareas reales se convierten en maná para misiones tácticas.',
				href: 'https://covenantrpg.com/',
			},
			{
				title: 'Spanish Advanced Drones',
				description: 'Trabajo con drones y servicios aéreos avanzados en España.',
				href: 'https://www.spanish-advanced-drones.com/',
			},
			{
				title: 'Libro de filosofía',
				description: 'Un proyecto temprano de escritura sobre filosofía, carácter, disciplina y cómo vivir.',
				path: '/projects/libro-de-filosofia',
			},
			{
				title: 'Libro de artes marciales',
				description: 'Un proyecto temprano de escritura sobre artes marciales, entrenamiento, presión y práctica.',
				path: '/projects/libro-de-artes-marciales',
			},
		],
		studyingLabel: 'ESTUDIANDO //',
		studying: ['Designing Data-Intensive Applications', 'Code Simplicity', 'UX'],
		guideLabel: 'MAPA DEL SITIO //',
		guide: [
			{ title: 'Artículos', description: 'Escritura larga y argumentos desarrollados.', path: '/articles' },
			{ title: 'Áreas', description: 'Hubs temáticos que conectan artículos, notas, recomendaciones y proyectos.', path: '/areas' },
			{ title: 'Notas', description: 'Notas de estudio de libros, cursos, recursos y aprendizaje activo.', path: '/notes' },
			{ title: 'Recomendaciones', description: 'Favoritos curados: libros, media, cursos, herramientas y juegos.', path: '/recommendations' },
			{ title: 'Proyectos', description: 'Cosas que estoy construyendo, intentando, probando o escribiendo.', path: '/projects' },
			{ title: 'CV', description: 'Perfil profesional práctico para recruiters y colaboradores.', path: '/cv' },
		],
	},
};

type ArchivePage = 'now' | 'articles' | 'notes' | 'documents' | 'projects' | 'recommendations';

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
		articles: {
			metaTitle: 'Articles',
			description: 'Long-form articles and essays on engineering, product, philosophy, faith, productivity, and practice.',
			moduleLabel: 'ARTICLE.INDEX //',
			kicker: 'LONG-FORM ARCHIVE',
			title: 'Articles and essays.',
			listLabel: 'PUBLISHED ARTICLES //',
			empty: 'No articles are published yet.',
		},
		notes: {
			metaTitle: 'Notes',
			description: 'Study notes from books, courses, resources, and active learning.',
			moduleLabel: 'NOTE.INDEX //',
			kicker: 'STUDY NOTES',
			title: 'Notes from study and practice.',
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
			description: 'Things Yifan is building, attempting, testing, or writing.',
			moduleLabel: 'PROJECT.INDEX //',
			kicker: 'SYSTEMS AND EXPERIMENTS',
			title: 'Projects and case studies.',
			listLabel: 'SELECTED PROJECTS //',
			empty: 'No projects are published yet.',
		},
		recommendations: {
			metaTitle: 'Recommendations',
			description: 'Curated favorite books, media, courses, tools, games, and resources from Yifan.',
			moduleLabel: 'RECOMMENDATION.INDEX //',
			kicker: 'CURATED FAVORITES',
			title: 'Recommendations worth returning to.',
			listLabel: 'CURATED RECOMMENDATIONS //',
			empty: 'No recommendations are published yet.',
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
		articles: {
			metaTitle: 'Artículos',
			description: 'Artículos y ensayos sobre ingeniería, producto, filosofía, fe, productividad y práctica.',
			moduleLabel: 'ARTICLE.INDEX //',
			kicker: 'ARCHIVO LARGO',
			title: 'Artículos y ensayos.',
			listLabel: 'ARTÍCULOS PUBLICADOS //',
			empty: 'Todavía no hay artículos publicados.',
		},
		notes: {
			metaTitle: 'Notas',
			description: 'Notas de estudio de libros, cursos, recursos y aprendizaje activo.',
			moduleLabel: 'NOTE.INDEX //',
			kicker: 'NOTAS DE ESTUDIO',
			title: 'Notas de estudio y práctica.',
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
			description: 'Cosas que Yifan está construyendo, intentando, probando o escribiendo.',
			moduleLabel: 'PROJECT.INDEX //',
			kicker: 'SISTEMAS Y EXPERIMENTOS',
			title: 'Proyectos y casos de estudio.',
			listLabel: 'PROYECTOS SELECCIONADOS //',
			empty: 'Todavía no hay proyectos publicados.',
		},
		recommendations: {
			metaTitle: 'Recomendaciones',
			description: 'Favoritos curados de Yifan: libros, media, cursos, herramientas, juegos y recursos.',
			moduleLabel: 'RECOMMENDATION.INDEX //',
			kicker: 'FAVORITOS CURADOS',
			title: 'Recomendaciones para volver.',
			listLabel: 'RECOMENDACIONES CURADAS //',
			empty: 'Todavía no hay recomendaciones publicadas.',
		},
	},
};

export const ARCHIVE_FILTER_COPY: Record<
	Locale,
	{
		controlsLabel: string;
		areasLabel: string;
		typesLabel: string;
		viewLabel: string;
		allAreasLabel: string;
		allTypesLabel: string;
		gridLabel: string;
		listLabel: string;
		noMatches: string;
		curatedLabel: string;
		areas: Record<string, string>;
		types: Record<string, string>;
	}
> = {
	en: {
		controlsLabel: 'Archive controls',
		areasLabel: 'AREA FILTER',
		typesLabel: 'TYPE FILTER',
		viewLabel: 'VIEW MODE',
		allAreasLabel: 'All areas',
		allTypesLabel: 'All types',
		gridLabel: 'GRID',
		listLabel: 'LIST',
		noMatches: 'No entries match the selected archive filters.',
		curatedLabel: 'Curated',
		areas: {
			engineering: 'Engineering',
			product: 'Product',
			philosophy: 'Philosophy',
			faith: 'Faith',
			productivity: 'Productivity',
			'martial-arts': 'Martial Arts',
			finance: 'Finance',
			notes: 'Notes',
		},
		types: {
			article: 'Article',
			note: 'Note',
			document: 'Document',
			project: 'Project',
			recommendation: 'Recommendation',
			now: 'Now',
		},
	},
	es: {
		controlsLabel: 'Controles del archivo',
		areasLabel: 'FILTRO DE ÁREA',
		typesLabel: 'FILTRO DE TIPO',
		viewLabel: 'MODO DE VISTA',
		allAreasLabel: 'Todas las áreas',
		allTypesLabel: 'Todos los tipos',
		gridLabel: 'GRID',
		listLabel: 'LIST',
		noMatches: 'Ninguna entrada coincide con los filtros seleccionados.',
		curatedLabel: 'Curada',
		areas: {
			engineering: 'Ingeniería',
			product: 'Producto',
			philosophy: 'Filosofía',
			faith: 'Fe',
			productivity: 'Productividad',
			'martial-arts': 'Artes marciales',
			finance: 'Finanzas',
			notes: 'Notas',
		},
		types: {
			article: 'Artículo',
			note: 'Nota',
			document: 'Documento',
			project: 'Proyecto',
			recommendation: 'Recomendación',
			now: 'Ahora',
		},
	},
};

export const AREAS_COPY: Record<
	Locale,
	{
		metaTitle: string;
		description: string;
		moduleLabel: string;
		kicker: string;
		title: string;
		listLabel: string;
		focusLabel: string;
		emptyLabel: string;
		sections: {
			articles: string;
			notes: string;
			recommendations: string;
			projects: string;
		};
	}
> = {
	en: {
		metaTitle: 'Areas',
		description: 'Broad topic hubs connecting Yifan’s articles, notes, recommendations, and projects.',
		moduleLabel: 'AREA.INDEX //',
		kicker: 'TOPIC HUBS',
		title: 'Areas of study and work.',
		listLabel: 'ACTIVE AREAS //',
		focusLabel: 'FOCUS //',
		emptyLabel: 'No public artifacts are published in this area yet.',
		sections: {
			articles: 'ARTICLES //',
			notes: 'NOTES //',
			recommendations: 'RECOMMENDATIONS //',
			projects: 'PROJECTS //',
		},
	},
	es: {
		metaTitle: 'Áreas',
		description: 'Hubs temáticos que conectan artículos, notas, recomendaciones y proyectos de Yifan.',
		moduleLabel: 'AREA.INDEX //',
		kicker: 'HUBS TEMÁTICOS',
		title: 'Áreas de estudio y trabajo.',
		listLabel: 'ÁREAS ACTIVAS //',
		focusLabel: 'FOCO //',
		emptyLabel: 'Todavía no hay artefactos públicos en esta área.',
		sections: {
			articles: 'ARTÍCULOS //',
			notes: 'NOTAS //',
			recommendations: 'RECOMENDACIONES //',
			projects: 'PROYECTOS //',
		},
	},
};

export const CV_COPY: Record<
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
		linksLabel: string;
		links: { label: string; href: string }[];
	}
> = {
	en: {
		metaTitle: 'CV',
		description: 'Professional CV for Yifan Ye Zhang.',
		moduleLabel: 'CV.001 //',
		kicker: 'PROFESSIONAL PROFILE',
		title: 'Yifan Ye Zhang',
		lede:
			'Software engineer at Signe, working across product systems, software engineering, disciplined practice, and selected personal projects.',
		specLabel: 'PROFILE //',
		specs: [
			{ label: 'Current', value: 'Software engineer at Signe' },
			{ label: 'Focus', value: ['Software engineering', 'Product systems', 'AI-assisted tools', 'Personal productivity systems'] },
			{ label: 'Projects', value: ['Covenant', 'Personal website', 'Philosophy book', 'Martial arts book'] },
			{ label: 'Location', value: 'Spain' },
		],
		linksLabel: 'LINKS //',
		links: [
			{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/yifan-ye-zhang/' },
			{ label: 'GitHub', href: 'https://github.com/YifanYes' },
			{ label: 'X', href: 'https://x.com/yifan_yz' },
		],
	},
	es: {
		metaTitle: 'CV',
		description: 'CV profesional de Yifan Ye Zhang.',
		moduleLabel: 'CV.001 //',
		kicker: 'PERFIL PROFESIONAL',
		title: 'Yifan Ye Zhang',
		lede:
			'Software engineer en Signe, trabajando entre sistemas de producto, ingeniería de software, práctica disciplinada y proyectos personales seleccionados.',
		specLabel: 'PERFIL //',
		specs: [
			{ label: 'Actual', value: 'Software engineer en Signe' },
			{ label: 'Foco', value: ['Ingeniería de software', 'Sistemas de producto', 'Herramientas con IA', 'Sistemas personales de productividad'] },
			{ label: 'Proyectos', value: ['Covenant', 'Sitio personal', 'Libro de filosofía', 'Libro de artes marciales'] },
			{ label: 'Ubicación', value: 'España' },
		],
		linksLabel: 'ENLACES //',
		links: [
			{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/yifan-ye-zhang/' },
			{ label: 'GitHub', href: 'https://github.com/YifanYes' },
			{ label: 'X', href: 'https://x.com/yifan_yz' },
		],
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
			{ label: '03', value: ['Covenant', 'Articles', 'Curated notes'] },
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
			{ label: '03', value: ['Covenant', 'Artículos', 'Notas curadas'] },
		],
	},
};
