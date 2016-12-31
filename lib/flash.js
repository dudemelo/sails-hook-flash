'use strict';

/**
 * Session key name
 *
 * @todo Move to the hook config
 * @type {string}
 */
var _session_key = 'flash';

/**
 * Flash Message
 *
 * @param  {object}   req
 * @param  {object}   res
 * @param  {function} next
 * @return {function}
 */
module.exports = function (req, res, next) {

  /**
   * Disabling the hook if doesn't have session
   */
  if (typeof req.session === 'undefined') {
    return next();
  }

  /**
   * Preparing the session to store the flash messages
   */
  if (typeof req.session[_session_key] === 'undefined') {
    req.session[_session_key] = {};
  }

  /**
   * Getting messages in the view layer
   *
   * @type {object}
   */
  res.locals.flash = {

    /**
     * Get all flash messages
     *
     * @return {object}
     */
    all: function () {
      var messages = req.session[_session_key];
      req.session[_session_key] = {};
      return messages;
    },

    /**
     * Get a specific type of flash messages
     *
     * @param  {string} type
     * @return {object}
     */
    get: function (type) {
      if (this.has(type)) {
        var messages = req.session[_session_key][type];
        delete req.session[_session_key][type];
      }
      return messages||[];
    },

    /**
     * Check if a specific type of flash messages exists
     *
     * @param  {string}  type
     * @return {boolean}
     */
    has: function (type) {
      return (typeof req.session[_session_key][type] === 'object');
    }

  };

  /**
   * Store a new flash message
   *
   * @param {string} type
   * @param {string} message
   */
  req.addFlash = (req.flash||function (type, message) {
    if (!req.hasFlash(type)) {
      req.session[_session_key][type] = [];
    }
    req.session[_session_key][type].push(message);
    return req;
  });

  /**
   * Get a specific type of flash messages in the controller layer
   *
   * @param  {string} type
   * @return {object}
   */
  req.getFlash = (req.flash||res.locals.flash.get);

  /**
   * Check if a specific type of flash messages exists in the controller layer
   *
   * @see res.locals.flash.has
   */
  req.hasFlash = res.locals.flash.has;

  return next();

};
