'use strict';

module.exports = function (grunt) {
    // load all grunt tasks

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
       
        compass: {
            options: {
                sassDir: 'style/scss',
                cssDir: 'style/css',
                relativeAssets: true
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['compass']);
};
