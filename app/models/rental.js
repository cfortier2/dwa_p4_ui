import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  price: DS.attr(),
  available_month: DS.attr(),
  summary: DS.attr(),
  emailAddress: DS.attr(),
});
