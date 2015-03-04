/**
 * Flash message
 * 
 * @param  {object}   request
 * @param  {object}   response
 * @param  {function} next
 * @return {function}
 */
module.exports = function (request, response, next) {

  /**
   * Inivialize the flash object
   */
  if (typeof request.session._flash === 'undefined') {
    request.session._flash = [];
  }

  /**
   * Add a new message to the flash object
   * 
   * @param {string} type
   * @param {string} message
   */
  request.addFlash = function (type, message) {
    if (typeof this.session._flash[type] === 'undefined') {
      this.session._flash[type] = [];
    }
    this.session._flash[type].push(message);
    return this;
};

  /**
   * Get flash messages  by type
   * 
   * @param  {string} type
   * @return {object}
   */
  request.getFlash = function (type) {
    if (typeof this.session._flash[type] === 'object') {
      var messages = this.session._flash[type];
      delete this.session._flash[type];
    }
    return messages||[];
  };

  return next();
};
