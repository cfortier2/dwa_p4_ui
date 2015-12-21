import Ember from 'ember';
import config from '../config/environment';

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
  apihost: config.APP.apihost,
  apiImages: config.APP.apihost.concat('/images'),
  // create a unique ID for each rental creation. It's a bit of a hack for not having proper session management.
  uniqid: Date.now(),

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),


  actions: {
      saveRental: function() {
        console.log('saveRental this:');
        console.log(this);
        console.log(this.get('imageids'));
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
          summary: summary,
          uniqid: this.uniqid
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
