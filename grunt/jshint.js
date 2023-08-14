module.exports = {
	options: {
		curly: true,
		eqeqeq: true,
		eqnull: true,
		browser: true,
		force: true,
		reporterOutput: "",
		globals: {
			jQuery: true
		}
	},
	all: [
		'source/js/**/*.js',
		'!source/js/libs/**/*'
	],
	configFiles: [
		'.csscomb.json',
		'Gruntfile.js',
		'package.json'
	]
};