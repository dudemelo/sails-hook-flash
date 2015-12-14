'use strict';

var assert = require('assert-plus');
var flash  = require('../lib/flash');

describe('Response tests ::', function () {

  var request  = {session: {}};
  var response = {locals: {}};

  before(function (done) {
    return flash(request, response, done);
  });

  describe('flash.add(type, message)', function () {
    it('is callable ', function () {
      assert.func(
        request.addFlash,
        'flash.add must be a function'
      );
    });
  });

  describe('flash.get(type)', function () {
    it('is callable', function () {
      assert.func(
        request.getFlash,
        'flash.get must be a function'
      );
    });
  });

  describe('hasFlash(type)', function () {
    it('is callable', function () {
      assert.func(
        request.hasFlash,
        'flash.has must be a function'
      );
    });
  });

});
