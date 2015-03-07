var Sails = require('sails').Sails;

describe('Response tests ::', function () {

  var sails;

  before(function (done) {

    this.timeout(10000);

    Sails().lift({
        hooks: { grunt: false },
        log:   { level: 'error' }
      }, function (error, _sails) {

      if (error) {
        return done(error);
      }

      sails = _sails;
      return done();

    });

  });

  after(function (done) {
    if (sails) {
      return sails.lower(done);
    }
    return done();
  });

  it('res.locals.flash.add', function () {
    return true;
  });

  it('res.locals.flash.get', function () {
    return true;
  });

  it('res.locals.flash.has', function () {
    return true;
  });

});
