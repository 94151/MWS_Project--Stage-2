module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            jpg: {
              options: {
                progressive: true
              },
              files: [
                {
                  expand: true,
                  cwd: 'img/',
                  src: ['**/*.jpg','**/*.jpeg'],
                  dest: 'img/compress',
                  ext: '.jpg'
                }
              ]
            }
        }
  });

    grunt.loadNpmTasks('grunt-contrib-imagemin');

}