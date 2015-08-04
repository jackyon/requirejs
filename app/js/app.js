require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min'
    }
    // shim: {
    // 	fullPage: ['jquery'],
    //     tiltFx: ['jquery']
    // }
});

require(['models/example/main'], function(example){
    example.init();
});