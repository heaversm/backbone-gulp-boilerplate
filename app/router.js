// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
], function($, _, Backbone, HomeView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function (actions) {
       // We have no matching route, lets display the home page
        var homeView = new HomeView();
        homeView.render();
    });

    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
