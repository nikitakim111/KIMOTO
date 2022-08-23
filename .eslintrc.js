// eslint-disable-next-line no-undef
module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'no-var': 'error',
		semi: ['warn', 'always'],
		'semi-style': ['error', 'last'],
		quotes: ['error', 'single'],
	},
};
