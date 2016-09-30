module.exports = function(grunt) {

	grunt.initConfig({
		clean: ['src/css'],
		sass: {
			options: {
				sourcemap: 'none',
				style: 'expanded'
			},
			dist: {
				files: {
					'src/css/master.css': 'src/scss/master.scss'
				}
			}
		},
		watch: {
			files: ['src/scss/master.scss'],
			tasks: ['default']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['clean', 'sass']);

};