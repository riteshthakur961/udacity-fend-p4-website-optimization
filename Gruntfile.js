
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
	            dest: './'
	        }
	    },
	    htmlmin: {                                
		    dist: {                             
			    options: {
			      removeComments: true,
			      collapseWhitespace: true
			    },
			    files: {
			      'dist/index.html': 'index.html',
		          'dist/project-2048.html': 'project-2048.html',
		          'dist/project-mobile.html': 'project-mobile.html',
		          'dist/project-webperf.html': 'project-webperf.html', 
		          'dist/views/pizza.html': 'views/pizza.html'
			    }
		    }
		},
	    tinyimg: {		      
		      dynamic: {
		        files: [{
		          expand: true,
		          cwd: './', 
		          src: [
		          'views/images/*.{png,jpg,svg}', 
		          'img/*.{png,jpg}'
		          ],
		          dest: 'dist/'
		        }]
		      }
	    },
	    copy: {
	    	main: {
	    		files: [
		    		{
		    			src: 'js/perfmatters.js',
		    			dest: 'dist/'
		    		}
	    		]
	    	}
	    }

	});

	//Load plugins
	grunt.loadNpmTasks('grunt-inline');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-tinyimg');

	// Default task(s)
	grunt.registerTask('default', ['inline', 'htmlmin', 'tinyimg', 'copy']);

};