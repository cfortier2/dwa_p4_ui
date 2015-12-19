import Ember from 'ember';

export default Ember.Controller.extend({

  emailAddress: '',
  title: '',
  owner: '',
  city: '',
  type: '',
  image: '',
  price: '',
  available_month: '',
  summary: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  actions: {
      saveRental: function() {
        console.log(this);
        var emailAddress = this.get('emailAddress');
        var title = this.get('title');
        var owner = this.get('owner');
        var city = this.get('city');
        var type = this.get('type');
        var image = this.get('image');
        var price = this.get('price');
        var available_month = this.get('available_month');
        var summary = this.get('summary');

        var newRental = this.store.createRecord('rental', {
          emailAddress: emailAddress,
          title: title,
          owner: owner,
          city: city,
          type: type,
          image: image,
          price: price,
          available_month: available_month,
          summary: summary
        });

        var _that = this;

        function transitionToRental(rental) {
          console.log(rental);
          _that.transitionToRoute('rental', rental);
        }
        newRental.save().then(transitionToRental);
      }
    }
});
