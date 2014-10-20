define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var HomeModel = Backbone.Model.extend({

    defaults : {
        title : 'AMEX'
    }

  });

  return HomeModel;

});
