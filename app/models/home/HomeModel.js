define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var HomeModel = Backbone.Model.extend({

    defaults : {
        title : 'HOME'
    }

  });

  return HomeModel;

});
