
'use strict';

module.exports = function(username, token, app) {
  var Beanstalk = require('./Beanstalkapp.js');
  return new Beanstalk(username, token, app);
};
