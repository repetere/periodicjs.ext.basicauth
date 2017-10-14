'use strict';

const periodic = require('periodicjs');
const extensionRouter = periodic.express.Router();
const controllers = require('../controllers');
const basicauthSettings = periodic.settings.extensions['periodicjs.ext.basicauth'];

if (basicauthSettings.use_global_basic_access_auth) {
  extensionRouter.use(controllers.auth.ensureAuthentication);
}

module.exports = extensionRouter;