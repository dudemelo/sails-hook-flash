var Sails = require('sails').Sails;

describe('Request tests ::', function () {

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

  it('req.addFlash', function () {
    return true;
  });

  it('req.getFlash', function () {
    return true;
  });

  it('req.hasFlash', function () {
    return true;
  });

});
