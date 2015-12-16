import DS from 'ember-data';

//TODO: environment variable
export default DS.RESTAdapter.extend({
  host: 'http://192.168.99.100',
  // headers: function() {
  //   return {
  //     "XSRF-TOKEN": decodeURIComponent(Ember.get(document.cookie.match(/XSRF\-TOKEN\=([^;]*)/), "1"))
  //   };
  // }.property().volatile()
});
