'use strict';

var assert = require('assert-plus');
var flash  = require('../lib/flash');

describe('Response tests ::', function () {

  var request  = {session: {}};
  var response = {locals: {}};

  before(function (done) {
    return flash(request, response, done);
  });

  describe('all()', function () {
    it('is callable', function () {
      assert.func(
        response.locals.flash.all,
        'Must be a function'
      );
    });

    it('returns all messages', function () {
      assert.object(
        response.locals.flash.all(),
        'Must return an object of message types'
      );
    });
  });

  describe('get(type)', function () {
    it('is callable', function () {
      assert.func(
        response.locals.flash.get,
        'Must be a function'
      );
    });

    it('returns all messages from a type', function () {
      assert.array(
        response.locals.flash.get('success'),
        'Must return an array of messages'
      );
    });
  });

  describe('has(type)', function () {
    it('is callable', function () {
      assert.func(
        response.locals.flash.has,
        'Must be a function'
      );
    });

    it('checks if a message type was stored', function () {
      assert.bool(
        response.locals.flash.has('success'),
        'Must return a boolean'
      );
    });
  });

});
