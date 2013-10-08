// lib/network.js

var request = require('request'),
    _ = require('lodash');

module.exports = function Network(echonest) {

  var requestHandler = function requestHandler(callback) {
    return function(error, response, body) {
      if (error) return callback(error, null);

      var data = {};

      try {
        data = JSON.parse(body);
        data = data.response;
      } catch(e) {
        return callback(new Error('Error parsing JSON: ' + body), null);
      }

      if (response.statusCode !== 200) return callback(new Error(data.status.message), null);

      return callback(null, data);
    };
  };

  this.get = function get(uri, callback, anonymous) {
    if (!anonymous) uri += '&api_key=' + echonest.getApiKey();

    uri = echonest.baseUri + uri;

    request(uri, requestHandler(callback));
  };

  this.post = function(uri, data, callback, anonymous) {
    if (!anonymous) data.api_key = echonest.getApiKey();

    uri = echonest.baseUri + uri;

    request({
      uri: uri,
      method: 'POST',
      form: data
    }, requestHandler(callback));
  };

  this._filterParams = function _filterParams(params, filter) {
    return _.pick(params, filter);
  };

  this._buildQuery = function _buildQuery(params) {
    return _.map(params, function(value, key) {
      if (_.isArray(value)) {
        return key + '=' + value.join('&' + key + '=');
      } else {
        return key + '=' + value;
      }
    }).join('&');
  };



};

