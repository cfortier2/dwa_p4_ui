import DS from 'ember-data';
import config from '../config/environment';

//TODO: environment variable
export default DS.RESTAdapter.extend({
  host: config.APP.apihost,
});
