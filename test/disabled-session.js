'use strict';

var assert = require('assert-plus');
var flash  = require('../lib/flash');

describe('Disabled Session', function () {

  var request  = {};
  var response = {locals: {}};

  before(function (done) {
    return flash(request, response, done);
  });

  it('should disable the hook', function () {
    assert.strictEqual(typeof response.locals.flash, 'undefined');
    assert.strictEqual(typeof request.addFlash, 'undefined');
    assert.strictEqual(typeof request.getFlash, 'undefined');
    assert.strictEqual(typeof request.hasFlash, 'undefined');
  });

});
