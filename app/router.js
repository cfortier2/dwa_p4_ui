import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('create-listing');
  this.route('rentals');
  this.route('rental', {path: '/rentals/:id'});
});

export default Router;
