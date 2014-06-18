module.exports = function(grunt){

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON("package.json"),

        uglify: {
          build: {
            files: {
              'angular-ui-confirm.min.js': ['angular-ui-confirm.js']
            }
          }
        }

    });

    grunt.registerTask("build", ["uglify"]);
    
    grunt.registerTask("default", ["build"]);

};