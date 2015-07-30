require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min'
    }
});

require(['models/example/main'], function(example){
    example.init();
});