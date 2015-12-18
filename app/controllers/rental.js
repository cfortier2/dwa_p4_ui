import Ember from 'ember';

export default Ember.Controller.extend({
  isDisabled: true,
  actions: {
    updateListing() {
      this.set('isDisabled', false);
    },
    saveListing() {
      this.set('isDisabled', true);
      // implement update
    },
    deleteListing() {
      this.set('isDisabled', true);
      // implement delete
    }
  }
});
