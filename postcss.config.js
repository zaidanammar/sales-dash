const plugins = {
	'postcss-import': {},
	tailwindcss: {},
	autoprefixer: {},
}

if (process.env.NODE_ENV === 'production') {
	plugins['@fullhuman/postcss-purgecss'] = {
		content: ['./src/**/*.{js,jsx,ts,tsx}'],
		defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
	}

	plugins.cssnano = {
		preset: ['default'],
	}
}

module.exports = {
	plugins,
}
