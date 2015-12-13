import DS from 'ember-data';

//TODO: environment variable
export default DS.RESTAdapter.extend({
  host: 'http://192.168.99.100'
});
