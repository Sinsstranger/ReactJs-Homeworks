const {resolve} = require("path");
module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		"airbnb",
		"airbnb/hooks",
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		"plugin:prettier/recommended",
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
	settings: {
		react: {version: '18.2'},
		'import/resolver': {
			alias: {
				extensions: ['.js', '.ts', '.jsx', ".tsx"],
				map: [
					['@', './src'],
					["@components", resolve(__dirname, "src/components")],
					["@helpers", resolve(__dirname, "src/helpers")],
					["@slices", resolve(__dirname, "src/slices")],
					["@css", resolve(__dirname, "src/css")],
					["@context", resolve(__dirname, "src/contexts")],
					["@middlewares", resolve(__dirname, "src/middlewares")],
					["@reducers", resolve(__dirname, "src/reducers")],
					["@routes", resolve(__dirname, "src/routes")],
					["@layouts", resolve(__dirname, "src/layouts")],
					["@hooks", resolve(__dirname, "src/hooks")],
				],
			},
		},
	},
	plugins: ['react-refresh', "prettier"],
	rules: {
		"prettier/prettier": "error",
		"arrow-body-style": "off",
		"prefer-arrow-callback": "off",
		'react-refresh/only-export-components': [
			'warn',
			{allowConstantExport: true},
		],
		"react/jsx-uses-react": "error",
		"react/jsx-uses-vars": "error",
		"react/jsx-props-no-spreading": "off",
		'no-param-reassign': ['error', { props: false }]
	},
}
