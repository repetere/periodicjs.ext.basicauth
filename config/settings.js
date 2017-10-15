'use strict';

module.exports = {
  settings: {
    ignore_routes:['/healthcheck'],    
    skip_auth_headers: ['clientid', 'authorization',],
    use_global_basic_access_auth: true,
    use_core_data_model: false, //basicauth_user
    users: {
      admin: 'pass',
    },
  },
  databases: {
    basicauth: {
      router: {},
      controller: {
        default: {
          responder: {
            adapter: 'json',
          },
          protocol: {
            api: 'rest',
            adapter: 'http',
          },
        },
      },
      db: 'lowkie',
      options: {
        dbpath: 'content/data/basic_auth_users/auth_db.json',
        dboptions: {
          verbose: true,
        },
      },
      /*
      options: {
        mongoose_options: {
          server: {
            socketTimeoutMS: 30000,
            connectTimeoutMS: 30000,
            keepAlive: 1
          },
          replset: {
            socketTimeoutMS: 30000,
            connectTimeoutMS: 30000,
            keepAlive: 1,
            rs_name: '___RS__NAME___'
          }
        },
        url: 'mongodb://id:password@address:port/db'
      },
      db: 'mongoose'
      */
    },
  },
};