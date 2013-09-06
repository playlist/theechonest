// lib/network/index.js

var Q = require('kew'),
    request = require('request');

var Network = module.exports = function Network() {

  var apiKey = null;

  this.getApiKey = function getApiKey() {
    return apiKey;
  };

  this.setApiKey = function setApiKey(key) {
    apiKey = key;
  };

  this.get = function get(uri) {
    var deferred = Q.defer();

    request(uri, function(error, response, body) {
      if (error) deferred.reject(error);
      else deferred.resolve(response);
    });

    return deferred.promise;
  };

};

