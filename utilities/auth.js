'use strict';
const periodic = require('periodicjs');
const basicauthSettings = periodic.settings.extensions['periodicjs.ext.basicauth'];

function checkCredentials(options) {
  const { credentials, } = options;
  return new Promise((resolve, reject) => {
    try {
      if (!credentials || !basicauthSettings.users[credentials.name] ||basicauthSettings.users[credentials.name] !== credentials.pass) {
        resolve(false);
      } else {
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