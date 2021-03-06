/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rentals',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      apihost: 'default-host',
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.apihost = 'http://192.168.99.100';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.apihost = 'http://192.168.99.100';
  }

  if (environment === 'production') {
    ENV.APP.apihost = 'http://p4.fortier.io:85';
  }

  ENV.contentSecurityPolicy = {
  'connect-src': "'self' * http://maxcdn.bootstrapcdn.com",
  'style-src': "'self' * http://maxcdn.bootstrapcdn.com",
  'script-src': "'self' * http://maxcdn.bootstrapcdn.com 'unsafe-inline' 'unsafe-eval'",
  'font-src': "'self' * http://maxcdn.bootstrapcdn.com",
  'img-src': "'self' * data:",
}

  return ENV;
};
