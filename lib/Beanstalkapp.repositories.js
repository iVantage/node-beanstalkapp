
'use strict';

var Promise = require('bluebird');

var create = function(data) {
  /**
   * todo
   */
  return Promise.reject('Repository action "create" is not yet implemented.');
};

var read = function() {
  /**
   * todo
   */
  return Promise.reject('Repository action "create" is not yet implemented.');
};

var update = function() {
  /**
   * todo
   */
  return Promise.reject('Repository action "create" is not yet implemented.');
};

var remove = function() {
  /**
   * todo
   */
  return Promise.reject('Repository action "create" is not yet implemented.');
};

module.exports = function(action) {
  var fn = {
    create: create,
    list: read,
    read: read,
    update: update,
    'delete': remove,
    remove: remove
  }[action];

  if(fn) {
    return fn.apply(this, Array.prototype.slice.apply(arguments));
  } else {
    return Promise.reject(new Error('Unrecognized repository action: ' + action));
  }

};
