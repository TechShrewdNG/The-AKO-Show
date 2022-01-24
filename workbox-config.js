module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{html,css,jpg,gif,png,xml,php,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};