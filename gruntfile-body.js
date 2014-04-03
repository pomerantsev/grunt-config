'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    copy: {
      js: {
        expand: true,
        cwd: 'app/scripts',
        dest: '.tmp/scripts/',
        src: '**/*.js'
      }
    },
    traceur: {
      options: {
        experimental: true
      },
      files: {
        expand: true,
        cwd: 'app/scripts',
        dest: '.tmp/scripts/',
        src: '**/*.js'
      }
    },
    clean: {
      server: '.tmp'
    },
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            'app'
          ]
        }
      }
    },
    watch: {
      js: {
        files: ['app/scripts/**/*.js'],
        tasks: ['traceur']
      },
      livereload: {
        options: {
          livereload: '<%= connect.livereload.options %>'
        },
        files: [
          'app/**/*.html',
          'app/styles/**/*.css',
          '.tmp/scripts/**/*.js'
        ]
      }
    }
  });

  grunt.registerTask('say-something', function () {
    console.log('Something.');
  });

  grunt.registerTask('serve', [
    'say-something',
    'clean:server',
    'traceur',
    'connect:livereload',
    'watch'
  ]);
};
