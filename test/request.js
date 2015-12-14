'use strict';

var assert = require('assert-plus');
var flash  = require('../lib/flash');

describe('Request tests ::', function () {

  var request  = {session: {}};
  var response = {locals: {}};

  before(function (done) {
    return flash(request, response, done);
  });

  describe('addFlash(type, message)', function () {
    it('is callable ', function () {
      assert.func(
        request.addFlash,
        'addFlash must be a function'
      );
      assert.ok(request.addFlash('success', 'Stores a message.'));
      assert.ok(request.addFlash('success', 'Stores another message.'));
    });

    it('stores a message', function () {
      var session = request.session[Object.keys(request.session)[0]];
      assert.object(
        session,
        'The session must be an object'
      );
      assert.array(
        session.success,
        'The flash message type must have an array of messages'
      );
      assert.strictEqual(
        session.success[0],
        'Stores a message.'
      );
    });

    it('stores more than one message per type', function () {
      var session = request.session[Object.keys(request.session)[0]];
      assert.strictEqual(
        session.success.length,
        2,
        'The flash message type must have an array of messages'
      );
    });
  });

  describe('getFlash(type)', function () {
    it('is callable', function () {
      assert.func(
        request.getFlash,
        'getFlash must be a function'
      );
    });
  });

  describe('hasFlash(type)', function () {
    it('is callable', function () {
      assert.func(
        request.hasFlash,
        'hasFlash must be a function'
      );
    });
  });

});
