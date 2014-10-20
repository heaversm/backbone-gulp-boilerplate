require.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery.min',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    templates: '../templates'
  }
});

require([
  // Load our app module and pass it to our definition function
  'app',
], function(App){
  App.initialize();
});
