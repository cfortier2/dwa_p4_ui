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
      console.log(this);

      var _that = this;
      function transitionToIndex() {
        _that.transitionToRoute('index');
      }

      this.store.findRecord('rental', id).then(function(rental) {
        if (_that.get('emailAddress')) { rental.set('emailAddress', _that.get('emailAddress')); }
        if (_that.get('title')) { rental.set('title', _that.get('title')); }
        if (_that.get('owner')) { rental.set('owner', _that.get('owner')); }
        if (_that.get('city')) { rental.set('city', _that.get('city')); }
        if (_that.get('type')) { rental.set('type', _that.get('type')); }
        if (_that.get('image')) { rental.set('image', _that.get('image')); }
        if (_that.get('price')) { rental.set('price', _that.get('price')); }
        if (_that.get('available_month')) { rental.set('available_month', _that.get('available_month')); }
        if (_that.get('summary')) { rental.set('summary', _that.get('summary')); }
        rental.save().then(transitionToIndex);
      });
    },

    deleteListing(id) {
      var _that = this;
      function transitionToIndex() {
        _that.transitionToRoute('index');
      }

      console.log(id);
      this.set('isDisabled', true);
      this.store.findRecord('rental', id).then(function(rental) {
        rental.destroyRecord().then(transitionToIndex);
        });
    },

  }
});
