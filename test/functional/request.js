'use strict';

var Sails = require('sails').Sails;
var Assert = require('assert');

describe('Functional :: Request tests ::', function () {

  var sails;

  // Sails lift
  before(function (done) {
    this.timeout(10000);
    Sails().lift({
        hooks: { grunt: false, flash: require('../index') },
        log:   { level: 'error' }
      }, function (error, _sails) {
      if (error) {
        return done(error);
      }
      sails = _sails;
      return done();
    });

  });

  // Sails lower
  after(function (done) {
    if (sails) {
      return sails.lower(done);
    }
    return done();
  });

  // Adding a flash message
  it('req.addFlash', function () {
    return true;
  });

  // Checking if a flash message exists
  it('req.hasFlash', function () {
    return true;
  });

  // Getting a flash message
  it('req.getFlash', function () {
    return true;
  });

});
