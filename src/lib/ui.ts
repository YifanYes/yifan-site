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
			{ label: 'Now', path: '/now' },
			{ label: 'Articles', path: '/articles' },
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
			{ label: 'Ahora', path: '/now' },
			{ label: 'Artículos', path: '/articles' },
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
		currentThreadsLabel: string;
		currentThreads: { title: string; description: string; path: string }[];
		selectedArtifactsLabel: string;
		selectedArtifacts: { type: string; title: string; description: string; path: string }[];
		areasLabel: string;
		areas: { title: string; description: string; icon: 'engineering' | 'product' | 'combat' | 'frameworks'; path: string }[];
		openQuestionsLabel: string;
		openQuestions: string[];
	}
> = {
	en: {
		metaTitle: "Yifan's Field Notes",
		description:
			'Engineering, product systems, philosophy, productivity, martial arts, curated notes, and selected projects from Yifan.',
		moduleLabel: 'WORKBENCH.001 //',
		eyebrow: 'PUBLIC WORKING SURFACE',
		title: "Yifan's Field Notes",
		lede:
			'A collection of notes, guides, articles and resources for engineering, product thinking, philosophy, productivity, martial arts, and personal projects.',
		currentThreadsLabel: 'CURRENT THREADS',
		currentThreads: [
			{
				title: 'Building the workbench',
				description: 'Shaping the site as a public surface for articles, notes, documents, and selected projects.',
				path: '/now',
			},
			{
				title: 'Testing product systems',
				description: 'Turning Covenant and related experiments into case studies about judgment, loops, and tradeoffs.',
				path: '/projects',
			},
			{
				title: 'Training attention',
				description: 'Using martial arts, combat practice, and disciplined repetition as a lens for better work.',
				path: '/notes',
			},
		],
		selectedArtifactsLabel: 'SELECTED ARTIFACTS',
		selectedArtifacts: [
			{
				type: 'ARTICLE',
				title: 'Engineering as Discipline',
				description: 'Long-form articles on craft, pressure, systems, and judgment.',
				path: '/articles',
			},
			{
				type: 'NOTE',
				title: 'Attention Is A Training Surface',
				description: 'A shorter model for attention, practice, and productive constraint.',
				path: '/notes',
			},
			{
				type: 'DOCUMENT',
				title: 'Workbench Operating Notes',
				description: 'A structured artifact for how this site is being assembled.',
				path: '/documents',
			},
			{
				type: 'PROJECT',
				title: 'Covenant',
				description: 'A productivity RPG where real tasks become mana for tactical quests.',
				path: '/projects',
			},
		],
		areasLabel: 'AREAS',
		areas: [
			{
				title: 'Engineering',
				description: 'Systems, architecture, craft, pressure, and implementation judgment.',
				icon: 'engineering',
				path: '/articles',
			},
			{
				title: 'Product Systems',
				description: 'Loops, incentives, interfaces, tradeoffs, and product strategy.',
				icon: 'product',
				path: '/projects',
			},
			{
				title: 'Martial Arts And Combat',
				description: 'Training notes on discipline, attention, pressure, and embodied practice.',
				icon: 'combat',
				path: '/notes',
			},
			{
				title: 'Frameworks',
				description: 'Reusable models for productivity, philosophy, decision-making, and study.',
				icon: 'frameworks',
				path: '/documents',
			},
		],
		openQuestionsLabel: 'OPEN QUESTIONS',
		openQuestions: [
			'What makes a personal site useful before it is complete?',
			'How should engineering notes become reusable frameworks instead of loose observations?',
			'Where does combat practice sharpen product and engineering judgment?',
			'How can Covenant stay visible without taking over the whole identity?',
		],
	},
	es: {
		metaTitle: 'Notas de campo de Yifan',
		description:
			'Ingeniería, sistemas de producto, filosofía, productividad, artes marciales, notas curadas y proyectos seleccionados de Yifan.',
		moduleLabel: 'WORKBENCH.001 //',
		eyebrow: 'SUPERFICIE PUBLICA DE TRABAJO',
		title: 'Notas de campo de Yifan',
		lede:
			'Una colección de notas, guías, artículos y recursos sobre ingeniería, pensamiento de producto, filosofía, productividad, artes marciales y proyectos personales.',
		currentThreadsLabel: 'HILOS ACTUALES',
		currentThreads: [
			{
				title: 'Construyendo el workbench',
				description: 'Dando forma al sitio como superficie publica para escritura, notas, documentos y proyectos seleccionados.',
				path: '/now',
			},
			{
				title: 'Probando sistemas de producto',
				description: 'Convirtiendo Covenant y otros experimentos en casos sobre criterio, bucles y tradeoffs.',
				path: '/projects',
			},
			{
				title: 'Entrenando atencion',
				description: 'Usando artes marciales, combate y repeticion disciplinada como lente para trabajar mejor.',
				path: '/notes',
			},
		],
		selectedArtifactsLabel: 'ARTEFACTOS SELECCIONADOS',
		selectedArtifacts: [
			{
				type: 'ARTICLE',
				title: 'Ingenieria como disciplina',
				description: 'Artículos largos sobre oficio, presion, sistemas y criterio.',
				path: '/articles',
			},
			{
				type: 'NOTE',
				title: 'La atencion es superficie de entrenamiento',
				description: 'Un modelo breve sobre atencion, practica y restricciones productivas.',
				path: '/notes',
			},
			{
				type: 'DOCUMENT',
				title: 'Notas operativas del workbench',
				description: 'Un artefacto estructurado sobre como se esta ensamblando este sitio.',
				path: '/documents',
			},
			{
				type: 'PROJECT',
				title: 'Covenant',
				description: 'Un RPG de productividad donde tareas reales se convierten en mana para misiones tacticas.',
				path: '/projects',
			},
		],
		areasLabel: 'AREAS',
		areas: [
			{
				title: 'Ingenieria',
				description: 'Sistemas, arquitectura, oficio, presion y criterio de implementacion.',
				icon: 'engineering',
				path: '/articles',
			},
			{
				title: 'Sistemas de producto',
				description: 'Bucles, incentivos, interfaces, tradeoffs y estrategia de producto.',
				icon: 'product',
				path: '/projects',
			},
			{
				title: 'Artes marciales y combate',
				description: 'Notas de entrenamiento sobre disciplina, atencion, presion y practica encarnada.',
				icon: 'combat',
				path: '/notes',
			},
			{
				title: 'Frameworks',
				description: 'Modelos reutilizables para productividad, filosofia, decision y estudio.',
				icon: 'frameworks',
				path: '/documents',
			},
		],
		openQuestionsLabel: 'PREGUNTAS ABIERTAS',
		openQuestions: [
			'Que hace util a un sitio personal antes de estar completo?',
			'Como convertir notas de ingenieria en frameworks reutilizables?',
			'Donde afina el combate el criterio de producto e ingenieria?',
			'Como mantener Covenant visible sin que tome toda la identidad?',
		],
	},
};

type ArchivePage = 'now' | 'articles' | 'notes' | 'documents' | 'projects';

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
			covenant: 'Covenant',
			notes: 'Notes',
		},
		types: {
			article: 'Article',
			note: 'Note',
			document: 'Document',
			project: 'Project',
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
			covenant: 'Covenant',
			notes: 'Notas',
		},
		types: {
			article: 'Artículo',
			note: 'Nota',
			document: 'Documento',
			project: 'Proyecto',
			now: 'Ahora',
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
