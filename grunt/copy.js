module.exports = {
	scripts: {
		files: [{
			expand: true,
			cwd: 'source/js',
			src: ['**/*.js', '!libs/**/*.js'],
			dest: 'build/js',
			filter: 'isFile'
		}, {
			expand: true,
			cwd: 'source/js/libs',
			src: ['**/*.js'],
			dest: 'build/js',
			filter: 'isFile'
		}]
	},

	styles: {
		files: [{
			expand: true,
			cwd: 'source/css',
			src: '*',
			dest: 'build/css',
			filter: 'isFile'
		}]
	},

	images: {
		files: [{
			expand: true,
			cwd: 'source/img',
			src: '*',
			dest: 'build/img',
			filter: 'isFile'
		}]
	},

	// custom web fonts

	fonts: {
		files: [{
			expand: true,
			cwd: 'source/fonts',
			src: '*',
			dest: 'build/fonts',
			filter: 'isFile'
		}]
	},



};