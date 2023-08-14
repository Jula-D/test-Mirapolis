module.exports = {
	options: {
		cache: false
	},
		
	dist: {
		files: [{
			expand: true,
			cwd: 'source/img',
			src: ['**/*.{png, jpg, gif, svg}'],
			dest: 'build/img'
		}]
	}
};