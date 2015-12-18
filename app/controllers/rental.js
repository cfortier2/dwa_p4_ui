import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: true,
  model_id: '',
  actions: {
    enableEdit() {
      this.set('isDisabled', false);
    },
    updateListing(id) {
      this.set('isDisabled', true);
      var emailAddress = this.get('emailAddress');
      var title = this.get('title');
      var owner = this.get('owner');
      var city = this.get('city');
      var type = this.get('type');
      var image = this.get('image');
      var price = this.get('price');
      var available_month = this.get('available_month');
      var summary = this.get('summary');

      console.log(id);
      this.store.findRecord('rental', id).then(function(rental) {
        rental.set('emailAddress', emailAddress);
        rental.set('title', title);
        rental.set('owner', owner);
        rental.set('city', city);
        rental.set('type', type);
        rental.set('image', image);
        rental.set('price', price);
        rental.set('available_month', available_month);
        rental.set('summary', summary);
        rental.save();
      });

    },
    deleteListing() {
      this.set('isDisabled', true);
      // implement delete
    }
  }
});
