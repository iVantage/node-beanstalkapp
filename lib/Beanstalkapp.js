
'use strict';

function Beanstalkapp(subdomain, username, token, app) {
  this._app = app;
  this._subdomain = subdomain;
  this._token = token;
  this._username = username;
}


// "Private" helper to make HTTP requests
Beanstalkapp.prototype._makeRequest = require('./Beanstalk._makeRequest.js');

Beanstalkapp.prototype.repositories = require('./Beanstalkapp.repositories.js');

module.exports = Beanstalkapp;
