// lib/network.js

var request = require('request');

module.exports = function Network(echonest) {

  this.get = function get(uri, callback, anonymous) {
    if (!anonymous) uri += '&api_key=' + echonest.getApiKey();

    uri = echonest.baseUri + uri;

    request(uri, function(error, response, body) {
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
    });
  };

};

