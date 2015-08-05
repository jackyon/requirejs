require.config({
	//remove js cache
    urlArgs: "bust=" + (new Date()).getTime(),
    waitSeconds: 0,
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