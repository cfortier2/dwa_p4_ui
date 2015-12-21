import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(images) {
  for ( var i = 0; i < images.length; i++) {
    if (i === 0) {
      return new Handlebars.SafeString(
        '<div class="item active">' +
        '<img src=' + images[i].url + 'width=150px height=150px class="img-rounded">' +
        '</div>'
      );
    }
  }
});
