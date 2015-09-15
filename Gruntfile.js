
module.exports = function(grunt) {

	grunt.initConfig({
	    inline: {
	        dist: {
	            options:{
	                cssmin: true,
	                uglify: true
	            },
	            src: [
	            'index.html',
	            'project-2048.html',
	            'project-mobile.html',
	            'project-webperf.html', 
	            'views/pizza.html'
	            ],
	            dest: 'dist/'
	        }
	    },
	    copy: {
	    	main: {
	    		files: [{
	    			expand: true,
	    			src: 'views/images/*',
	    			dest: 'dist/'
	    		},
	    		{
	    			expand: true,
	    			src: ['img/*'],
	    			dest: 'dist/'
	    		},
	    		{
	    			src: 'js/perfmatters.js',
	    			dest: 'dist/'
	    		}
	    		]
	    	}
	    },

	});



	//Load the inline plugin that inlines and minifies resource files
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-copy');


	// Default task(s)
	grunt.registerTask('default', ['inline', 'copy']);

};