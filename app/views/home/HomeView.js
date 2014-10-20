define([
  'jquery',
  'underscore',
  'backbone',
  'models/home/HomeModel',
  'text!/app/templates/home/homeTemplate.html'
], function($, _, Backbone,HomeModel,homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    initialize: function(){
      var self = this;
      self.model = new HomeModel();
    },

    render: function(){
      var homeTitle = this.model.get('title');
      var homeData = {
        title: homeTitle
      }

      var compiledTemplate = _.template( homeTemplate ); //prerender template
      this.$el.html(compiledTemplate(homeData));

    }

  });

  return HomeView;

});
