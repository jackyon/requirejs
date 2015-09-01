require.config({
    urlArgs: "bust=" + (new Date()).getTime(),  //remove js cache
    waitSeconds: 0,
    paths: {
        'jquery': 'libs/jquery/jquery.min'
    }
    // shim: {
    // 	fullPage: ['jquery'],
    //     tiltFx: ['jquery']
    // }
});

require(['models/example/main'], function(example){
    example.init();
});