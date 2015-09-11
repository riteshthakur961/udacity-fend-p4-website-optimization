
module.exports = function(grunt) {

	grunt.initConfig({
	    inline: {
	        dist: {
	            options:{
	                cssmin: true,
	                uglify: true
	            },
	            src: 'index.html',
	            dest: 'dist/index.html'
	        }
	    },
	    copy: {
	    	main: {
	    		files: [{
	    			src: 'views/images/pizzeria.jpg',
	    			dest: 'dist/views/images/pizzeria.jpg'
	    		},
	    		{
	    			expand: true,
	    			src: ['img/*'],
	    			dest: 'dist/'
	    		}]
	    	}
	    },

	});



	//Load the inline plugin that inlines and minifies resource files
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-copy');


	// Default task(s)
	grunt.registerTask('default', ['inline', 'copy']);

};