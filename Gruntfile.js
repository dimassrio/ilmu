module.exports = function (grunt) {

	// Initialize configuration object
	grunt.initConfig({

		// Read in project settings
		pkg: grunt.file.readJSON('package.json'),

		// User editable project settings & variables
		options: {
			// Base path to your assets folder
			base: 'assets',

			// Published assets path
			publish: 'public/assets',

			// Files to be clean on rebuild
			clean: {
				all: ['<%= options.css.concat %>', '<%= options.css.min %>', '<%= options.sass.compiled %>', '<%= options.js.min %>', '<%= options.js.concat %>'],
				concat: ['<%= options.css.concat %>', '<%= options.js.concat %>']
			},

			// CSS settings
			css: {
				base: 'assets/css',			 				// Base path to your CSS folder
				files: ['assets/css/sass.css'],							// CSS files in order you'd like them concatenated and minified
				concat: '<%= options.css.base %>/concat.css',	// Name of the concatenated CSS file
				min: '<%= options.publish %>/style.min.css'		// Name of the minified CSS file
			},

			// JavaScript settings
			js: {
				base: 'assets/js',							// Base path to you JS folder
				files: ['assets/vendor/jquery/jquery.min.js','assets/vendor/bootstrap-sass/dist/js/bootstrap.min.js','assets/js/app.js'],							// JavaScript files in order you'd like them concatenated and minified
				concat: '<%= options.js.base %>/concat.js',		// Name of the concatenated JavaScript file
				min: '<%= options.publish %>/script.min.js'		// Name of the minified JavaScript file
			},

			// LESS Settings
			/*less: {
				base: 'assets/less',							// Base path to you LESS folder
				file: 'assets/main.less',							// LESS file (ideally, one file which contains imports)
				compiled: '<%= options.css.base %>/less.css'	// Name of the compiled LESS file
			},*/

			// SASS Settings
			sass: {
				base: 'assets/',							// Base path to you SASS folder
				file: 'assets/main.scss',							// SASS file (ideally, one file which contains imports)
				compiled: '<%= options.css.base %>/sass.css'	// Name of the compiled SASS file
			},

			// STYLUS Settings
			/*stylus: {
				base: 'assets/stylus',							// Base path to you STYLUS folder
				file: 'assets/stylus/main.stylus',							// STYLUS file (ideally, one file which contains imports)
				compiled: '<%= options.css.base %>/stylus.css'		// Name of the compiled STYLUS file
			},*/

			// Notification messages
			/*notify: {
				watch: {
					title: 'Live Reloaded!',
					message: 'Files were modified, recompiled and site reloaded'
				}
			},*/

			// Files and folders to watch for live reload and rebuild purposes
			watch: {
				files: ['<%= options.js.files %>', '<%= options.css.files %>',
				 '<%= options.sass.base %>/*.sass', '<%= options.sass.base %>/*.scss', 'assets/css/app.scss',
				 '!<%= options.js.min %>', '!<%= options.sass.compiled %>']
			}
		},

		// Clean files and folders before replacement
		clean: {
			all: {
				src: '<%= options.clean.all %>'
			},
			concat: {
				src: '<%= options.clean.concat %>'
			}
		},

		// Concatenate multiple sets of files
		concat: {
			css: {
				files: {
					'<%= options.css.concat %>' : ['<%= options.css.files %>']
				}
			},
			js: {
				options: {
					block: true,
					line: true,
					stripBanners: true
				},
				files: {
					'<%= options.js.concat %>' : '<%= options.js.files %>',
				}
			}
		},

		// Minify and concatenate CSS files
		cssmin: {
			minify: {
	       		src: '<%= options.css.concat %>',
	        	dest: '<%= options.css.min %>'
			}
		},

		// Javascript linting - JS Hint
		jshint: {
			files: ['<%= options.js.files %>'],
			options: {
				// Options to override JSHint defaults
				curly: true,
				indent: 4,
				trailing: true,
				devel: true,
				globals: {
					jQuery: true
				}
			}
		},

		// Compile LESS files
		/*less: {
			main: {
				options: {
					yuicompress: true,
					ieCompat: true
				},
				files: {
					'<%= options.less.compiled %>': '<%= options.less.file %>'
				}
			}
		},*/

		// Compile SASS files
		sass: {
		    main: {
		        files: {
		        	'<%= options.sass.compiled %>': '<%= options.sass.file %>'
		        }
		    }
		},

		// Compile STYLUS files
		/*stylus: {
		    main: {
		        files: {
		        	'<%= options.stylus.compiled %>': '<%= options.stylus.file %>'
		        }
		    }
		},

		// Display notifications
		notify: {
			watch: {
				options: {
					title: '<%= options.notify.watch.title %>',
					message: '<%= options.notify.watch.message %>'
				}
			}
		},*/

		// Javascript minification - uglify
		uglify: {
			options: {
				preserveComments: false
			},
			files: {
				src: '<%= options.js.concat %>',
				dest: '<%= options.js.min %>'
			}
		},
		copy : {
			main:{
				files :[
				{expand:true, src:'assets/vendor/**', dest:'public/'},
				{expand:true, src:'assets/vendor/html5-boilerplate/*', dest:'public/', filter:'isFile', flatten:'true'}
				]
			}
		},
		// Watch for files and folder changes
		watch: {
			files: ['<%= options.watch.files %>','Gruntfile.js'],
			tasks: ['default']
		}


	});

	// Load npm tasks
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-compress');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-livereload');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-notify');

	// Register tasks
	grunt.registerTask('default', ['clean:all', 'sass',  'concat:css', 'cssmin', 'uglify', 'clean:concat']); // Default task
	grunt.registerTask('cpy', ['copy']);
	grunt.registerTask('wtch', ['watch']);
}