// lib/artist.js

var _ = require('lodash');

module.exports = function artist(echonest) {
  this.profile = function profile(params, callback) {
    params = _.pick(params, [
      'id',
      'name',
      'bucket'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('must specify an id or a name'), null);
    }

    if (_.isArray(params.bucket)) {
      params.bucket = params.bucket.join('&bucket=');
    }

    var query = _.map(params, function(value, key) { return key + '=' + value; }).join('');

    var uri = 'artist/profile?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

};
