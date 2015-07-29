require.config({
    paths: {
        jquery: 'libs/jquery/jquery.min'
    }
});

require(['models/example/example'], function(example){
    example.init();
});