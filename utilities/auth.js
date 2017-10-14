'use strict';
const periodic = require('periodicjs');
const basicauthSettings = periodic.settings.extensions['periodicjs.ext.basicauth'];

function checkCredentials(options) {
  const { credentials, res, } = options;
  return new Promise((resolve, reject) => {
    try {
      if (!credentials) {
        // console.log('DOES NOT HAVE CREDENTIALS')
        resolve(false);
      } else if (!basicauthSettings.users[credentials.name] ||basicauthSettings.users[credentials.name] !== credentials.pass) {
        // console.log('INCORRECT CREDENTIALS')
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Authorization Required"');
        res.end('Access denied');
        resolve('already-sent');
      } else {
        // console.log('PASSING CREDENTIALS')
        resolve(true);
      }
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  checkCredentials,
};