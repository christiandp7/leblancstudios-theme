module.exports = {
	mode: 'jit',
	future: {
		purgeLayersByDefault: true,
		applyComplexClasses: true,
	},
	purge: {
		content: [
			'./pages/**/*.{js,ts,jsx,tsx}',
			'./components/**/*.{js,ts,jsx,tsx}',
		],
		options: {
			safelist: {
				standard: ['outline-none'],
			},
		},
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
