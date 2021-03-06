import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.get('store').findAll('volume');
  },

  renderTemplate: function() {
    this.render('volumes', {into: 'application'});
  },

});
