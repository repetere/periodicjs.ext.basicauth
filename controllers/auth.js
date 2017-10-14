'use strict';
const periodic = require('periodicjs');
const auth = require('basic-auth');
const basicauthSettings = periodic.settings.extensions['periodicjs.ext.basicauth'];
const utilities = require('../utilities');

const ensureAuthentication = function (req, res, next) {
  const credentials = auth(req);

  utilities.auth.checkCredentials({ credentials, res, })
    .then(isAuthenticated => {
      let hasAuthSkipHeader = false;
      const hasSkipHeader = Object.keys(req.headers).reduce((result, header) => {
        if (basicauthSettings.skip_auth_headers.indexOf(header) !== -1) {
          hasAuthSkipHeader = true;
        }
      }, false);
      if (isAuthenticated==='already-sent'){ 
        //already sent header
      } else if (hasAuthSkipHeader) {
        next();
      } else if (isAuthenticated!==true) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
        res.end('Access denied');
      } else {
        next();
      }      
    })
    .catch(next);
};

module.exports = {
  ensureAuthentication,
};