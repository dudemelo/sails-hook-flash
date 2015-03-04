module.exports = function (sails) {
    return {
        routes: {
            before: {
                'all /*': require('./lib/flash')
            }
        }
    }
};
