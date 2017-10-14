'use strict';
const periodic = require('periodicjs');
const auth = require('basic-auth');
const basicauthSettings = periodic.settings.extensions['periodicjs.ext.basicauth'];
const utilities = require('../utilities');

const ensureAuthentication = function (req, res, next) {
  const credentials = auth(req);

  utilities.auth.checkCredentials({ credentials, })
    .then(isAuthenticated => {
      let hasAuthSkipHeader = false;
      const hasSkipHeader = Object.keys(req.headers).reduce((result, header) => {
        if (basicauthSettings.skip_auth_headers.indexOf(header) !== -1) {
          hasAuthSkipHeader = true;
        }
        // return basicauthSettings.skip_auth_headers.indexOf(header) !== -1;
      }, false);
      if (hasAuthSkipHeader) {
        next();
      } else if (isAuthenticated!==true) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
        res.end('Access denied');
      } else {
        next();
        // res.end('Access granted')
      }      
    })
    .catch(next);
};

module.exports = {
  ensureAuthentication,
};