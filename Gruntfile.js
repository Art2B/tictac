'use strict';

module.exports = function (grunt) {

  // Load npm tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-include-source');
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
      build: {
        files: {
          '<%= config.dist %>/scripts/app.min.js': ['<%= config.app %>/scripts/{,*/}*.js']
        }
      }
    },
    bower: {
      dist: {
        dest: '<%= config.dist %>/vendors'
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
      build: {
        files: {
          '<%= config.dist %>/styles/main.min.css': ['.tmp/styles/{,*/}*.css']
        }
      }
    },
  });

  // Actions
  grunt.registerTask('default', [
    'jshint:all',
    'bower:dist',
    'uglify:build',
    'sass:dist',
    'cssmin:build',
  ]);
};