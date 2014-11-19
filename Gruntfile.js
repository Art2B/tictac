'use strict';

module.exports = function (grunt) {

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-include-source');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-bower');

  var config = {
    app: 'src',
    dist: 'build'
  };

  grunt.initConfig({
    // Project settings
    config: config,
    pkg: grunt.file.readJSON('package.json'),
    // our Grunt task settings
    watch: {
      sass: {
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:dev']
      }
    },
    jshint: {
      // You get to make the name
      // The paths tell JSHint which files to validate
      all: ['<%= config.app %>/scripts/{,*/}*.js']
    },
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          '<%= config.dist %>/scripts/app.min.js': ['<%= config.app %>/scripts/{,*/}*.js']
        }
      }
    },
    bower: {
      dist: {
        dest: '.tmp/vendors'
      }
    },
    sass: {
      options: {
        loadPath: 'bower_components',
        compass: true
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      },
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= config.dist %>/styles/main.min.css': ['.tmp/styles/{,*/}*.css']
        }
      }
    },
    copy: {
      dist: {
        files: [
          // includes files within path
          {expand: true, flatten: true, src: ['src/images/*'], dest: 'build/images/'},
          {expand: true, flatten: true, src: ['src/views/*'], dest: 'build/views/'},
          {expand: true, flatten: true, src: ['.tmp/vendors/others/*'], dest: 'build/vendors/others/'},
          {expand: true, flatten: true, src: ['src/main.html'], dest: '<%= config.dist %>/'},
        ],
      },
      vendor1: {
        expand: true,
        cwd: '.tmp/vendors/',
        src: '**',
        dest: '.tmp/vendors/others/',
        flatten: true,
        filter: 'isFile',
      },
      vendor2: {
        files: [
          {
            expand: true,
            cwd: '.tmp/vendors/',
            src: 'others/angular.js',
            dest: 'build/vendors/',
            flatten: true,
            filter: 'isFile',
          },
        ]
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
          ]
        }]
      },
      vendor1: {
        files: [{
          dot: true,
          src: [
            '.tmp/vendors/*.js',
            '.tmp/vendors/css/*',
            '.tmp/vendors/js/*',
          ]
        }]
      },
      vendor2: {
        files: [{
          dot: true,
          src: [
            '.tmp/vendors/others/angular.js'
          ]
        }]
      },
      tmp: [".tmp/"],
    },
    includeSource: {
      options: {
        basePath: '.tmp',
        baseUrl: '',
      },
      dist: {
        files: {
          '<%= config.dist %>/index.html': '<%= config.app %>/index.html'
        }
      }
    }
  });

  // Actions
  grunt.registerTask('default', [
    'clean:tmp',
    'clean:dist',
    'jshint:all',
    'bower:dist',
    'copy:vendor1',
    'clean:vendor1',
    'copy:vendor2',
    'clean:vendor2',
    'uglify:dist',
    'sass:dist',
    'cssmin:dist',
    'copy:dist',
    'includeSource:dist',
    'clean:tmp',
  ]);
};