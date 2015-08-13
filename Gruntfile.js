module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        imagemin: {
          dist: {   
            options: {
                optimizationLevel: 3 //定义 PNG 图片优化水平    （1）
            },  
            files: [{
              expand: true,
              cwd: 'app/images',   // 优化 img 目录下所有 png/jpg/jpeg 图片
              src: '{,*/}*.{gif,jpeg,jpg,png}',
              dest: 'app/images'   // 优化后的图片保存位置，覆盖旧图片，并且不作提示
            }]
          }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-imagemin');          //   （2）
    grunt.registerTask('img', ['imagemin']);               //   （3）
};