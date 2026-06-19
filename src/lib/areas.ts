import type { Locale } from './i18n';

export type AreaSlug =
	| 'engineering'
	| 'product'
	| 'philosophy'
	| 'faith'
	| 'productivity'
	| 'martial-arts'
	| 'finance';

export type AreaDefinition = {
	slug: AreaSlug;
	title: Record<Locale, string>;
	description: Record<Locale, string>;
	focus: Record<Locale, string[]>;
};

export const AREA_DEFINITIONS: AreaDefinition[] = [
	{
		slug: 'engineering',
		title: {
			en: 'Software Engineering',
			es: 'Ingeniería de software',
		},
		description: {
			en: 'Systems, architecture, craft, pressure, and implementation judgment.',
			es: 'Sistemas, arquitectura, oficio, presión y criterio de implementación.',
		},
		focus: {
			en: ['Architecture', 'Developer craft', 'Operational judgment'],
			es: ['Arquitectura', 'Oficio de desarrollo', 'Criterio operacional'],
		},
	},
	{
		slug: 'product',
		title: {
			en: 'Product',
			es: 'Producto',
		},
		description: {
			en: 'Loops, incentives, interfaces, tradeoffs, and product strategy.',
			es: 'Bucles, incentivos, interfaces, tradeoffs y estrategia de producto.',
		},
		focus: {
			en: ['Product loops', 'Interfaces', 'Strategy'],
			es: ['Bucles de producto', 'Interfaces', 'Estrategia'],
		},
	},
	{
		slug: 'philosophy',
		title: {
			en: 'Philosophy',
			es: 'Filosofía',
		},
		description: {
			en: 'Character, ethics, attention, meaning, faith, and practical ways to live.',
			es: 'Carácter, ética, atención, sentido, fe y formas prácticas de vivir.',
		},
		focus: {
			en: ['Character', 'Ethics', 'Meaning'],
			es: ['Carácter', 'Ética', 'Sentido'],
		},
	},
	{
		slug: 'martial-arts',
		title: {
			en: 'Martial Arts',
			es: 'Artes marciales',
		},
		description: {
			en: 'Training, pressure, embodied discipline, combat sports, and practice notes.',
			es: 'Entrenamiento, presión, disciplina encarnada, deportes de combate y notas de práctica.',
		},
		focus: {
			en: ['Training', 'Pressure', 'Practice'],
			es: ['Entrenamiento', 'Presión', 'Práctica'],
		},
	},
	{
		slug: 'finance',
		title: {
			en: 'Finance',
			es: 'Finanzas',
		},
		description: {
			en: 'Money, markets, incentives, personal finance, and economic mental models.',
			es: 'Dinero, mercados, incentivos, finanzas personales y modelos económicos.',
		},
		focus: {
			en: ['Markets', 'Incentives', 'Personal finance'],
			es: ['Mercados', 'Incentivos', 'Finanzas personales'],
		},
	},
	{
		slug: 'productivity',
		title: {
			en: 'Productivity',
			es: 'Productividad',
		},
		description: {
			en: 'Attention, habits, systems, discipline, and the practical design of work.',
			es: 'Atención, hábitos, sistemas, disciplina y diseño práctico del trabajo.',
		},
		focus: {
			en: ['Attention', 'Systems', 'Discipline'],
			es: ['Atención', 'Sistemas', 'Disciplina'],
		},
	},
	{
		slug: 'faith',
		title: {
			en: 'Faith',
			es: 'Fe',
		},
		description: {
			en: 'Religious questions, Christian belief, spiritual practice, and moral seriousness.',
			es: 'Preguntas religiosas, creencia cristiana, práctica espiritual y seriedad moral.',
		},
		focus: {
			en: ['Christianity', 'Practice', 'Moral life'],
			es: ['Cristianismo', 'Práctica', 'Vida moral'],
		},
	},
];

export const AREA_BY_SLUG = new Map(AREA_DEFINITIONS.map((area) => [area.slug, area]));
