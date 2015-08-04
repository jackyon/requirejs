// only for test
// requirejs.config({
//     baseUrl: '../',
//     paths: {
//         jquery: 'js/libs/jquery/jquery.min',
//         tiltFx: 'js/models/tilt_fx/tilt_fx'
//     },
//     shim: {
//         tiltFx: {
//             deps: ['jquery']
//         }
//     }
// });


define(['jquery'], function($){
    return {
        init: function(){
            console.log('example');
        }
    }
});