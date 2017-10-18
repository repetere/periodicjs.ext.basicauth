'use strict';

const periodic = require('periodicjs');
const extensionRouter = periodic.express.Router();
const controllers = require('../controllers');
const basicauthSettings = periodic.settings.extensions['periodicjs.ext.basicauth'];

if (basicauthSettings.use_global_basic_access_auth) {
  extensionRouter[(basicauthSettings.use_auth_on_all_routes)?'use':'get'](controllers.auth.ensureAuthentication);
}

module.exports = extensionRouter;