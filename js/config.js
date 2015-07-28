require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min'
    }
});

require(['app'], function(app){
    app.hello();
});