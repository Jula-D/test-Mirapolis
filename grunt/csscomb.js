module.exports = {
	dist: {
		options: {
			config: '.csscomb.json'
		},
		files: [{
			expand: true,
			cwd: 'build/css',
			src: 'styles.css',
			dest: 'build/css'
		}]
	}
};