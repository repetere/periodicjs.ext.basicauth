# periodicjs.ext.basicauth [![Coverage Status](https://coveralls.io/repos/github/typesettin/periodicjs.ext.basicauth/badge.svg?branch=master)](https://coveralls.io/github/typesettin/periodicjs.ext.basicauth?branch=master) [![Build Status](https://travis-ci.org/typesettin/periodicjs.ext.basicauth.svg?branch=master)](https://travis-ci.org/typesettin/periodicjs.ext.basicauth)

basic access authentication is a method for an HTTP user agent to provide a user name and password when making a request.

[API Documentation](https://github.com/typesettin/periodicjs.ext.basicauth/blob/master/doc/api.md)

## Usage

### CLI TASK

You can preform a task via CLI
```
$ cd path/to/application/root
### Using the CLI
$ periodicjs ext periodicjs.ext.basicauth hello  
### Calling Manually
$ node index.js --cli --command --ext --name=periodicjs.ext.basicauth --task=hello 
```

## Configuration

You can configure periodicjs.ext.basicauth

### Default Configuration
```javascript
{
  settings: {
    skip_auth_headers: ['clientid', 'authorization',],
    use_global_basic_access_auth: true,
    use_core_data_model: false, //basicauth_user
    users: {
      username1:"password1",
      username2:"password2"
    },
  },

  
  databases: {
  },
};
```


## Installation

### Installing the Extension

Install like any other extension, run `npm run install periodicjs.ext.basicauth` from your periodic application root directory and then normally you would run `periodicjs addExtension periodicjs.ext.basicauth`, but this extension does this in the post install npm script.
```
$ cd path/to/application/root
$ npm run install periodicjs.ext.basicauth
$ periodicjs addExtension periodicjs.ext.basicauth //this extension does this in the post install script
```
### Uninstalling the Extension

Run `npm run uninstall periodicjs.ext.basicauth` from your periodic application root directory and then normally you would run `periodicjs removeExtension periodicjs.ext.basicauth` but this extension handles this in the npm post uninstall script.
```
$ cd path/to/application/root
$ npm run uninstall periodicjs.ext.basicauth
$ periodicjs removeExtension periodicjs.ext.basicauth // this is handled in the npm postinstall script
```


## Testing
*Make sure you have grunt installed*
```
$ npm install -g grunt-cli
```

Then run grunt test or npm test
```
$ grunt test && grunt coveralls #or locally $ npm test
```
For generating documentation
```
$ grunt doc
$ jsdoc2md commands/**/*.js config/**/*.js controllers/**/*.js  transforms/**/*.js utilities/**/*.js index.js > doc/api.md
```
## Notes
* Check out https://github.com/typesettin/periodicjs for the full Periodic Documentation