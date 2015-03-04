/**
 * Flash message for bootstrap
 */

module.exports = function (request, response, next) {

    /**
     * Default flash message
     *
     * @param  {String} type    The type must be danger, info, warning o success.
     * @param  {String} message The message.
     * @param  {Mixed}  params  Any param you want to the view know.
     * @return {Object}         The request object.
     */
    request.flash = function (type, message, params) {
        this.session.flash = {
            "type": type,
            "message": message,
            "params": params
        };
        return request;
    };

    /**
     * Flash message for error
     *
     * @see request.flash
     */
    request.flashError = function (message, params) {
        request.flash('danger', message, params);
        return request;
    };

    /**
     * Flash message for information
     *
     * @see request.flash
     */
    request.flashInfo = function (message, params) {
        request.flash('info', message, params);
        return request;
    };

    /**
     * Flash message for success
     *
     * @see request.flash
     */
    request.flashSuccess = function (message, params) {
        request.flash('success', message, params);
        return request;
    };

    /**
     * Flash message for warning
     *
     * @see request.flash
     */
    request.flashWarning = function (message, params) {
        request.flash('warning', message, params);
        return request;
    };

    response.locals.flash = (request.session.flash || {});
    delete request.session.flash;

    return next();
};
