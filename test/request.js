'use strict';

var assert = require('assert-plus');
var flash  = require('../lib/flash');

describe('Request tests ::', function () {

  var request  = {session: {}};
  var response = {locals: {}};

  before(function (done) {
    return flash(request, response, done);
  });

  describe("addFlash(type, message)", function () {
    it('is callable ', function () {
      assert.func(request.addFlash);
      assert.ok(request.addFlash(
        'success',
        'Is callable and and stores a message.'
      ))
    });

    it('stores a message', function () {
      var session = request.session[Object.keys(request.session)[0]];
      assert.object(session, 'Is an object');
      assert.array(session.success);
      assert.strictEqual(
        session.success[0],
        'Is callable and and stores a message.'
      );
    });

    it('stores more than one message per type', function () {
      var session = request.session[Object.keys(request.session)[0]];
      assert.object(session, 'Is an object');
      assert.array(session.success);
      assert.strictEqual(
        session.success[0],
        'Is callable and and stores a message.'
      );
    });
  });

});
