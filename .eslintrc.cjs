module.exports = {
	root: true,
	extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],
	env: {
		es2017: true,
		node: true,
	},
	globals: {
		NodeJS: true,
	},
	rules: {
		'no-console': 0,
		'consistent-return': 0,
		'import/prefer-default-export': 0,
		'no-underscore-dangle': 0,
		'import/no-extraneous-dependencies': 0,
		strict: 0,
		'import/no-dynamic-require': 0,
		'no-path-concat': 0,
		'prefer-template': 0,
		'import/newline-after-import': 0,
		'global-require': 0,
		'import/order': 0,
		'no-unused-expressions': 0,
		'no-sequences': 0,
	},
};
