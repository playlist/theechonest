// lib/track.js

var _ = require('lodash');

module.exports = function track(echonest) {
  this.profile = function profile(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'md5',
      'bucket'
    ]);

    if (!params.id && !params.md5) {
      return callback(new Error('Must specify an id or a md5'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'track/profile?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.upload = function upload(params, callback) {
    callback(new Error('Upload not implemented', null));
  };
};
