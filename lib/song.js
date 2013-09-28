// lib/song.js

var _ = require('lodash');

module.exports = function song(echonest) {
  this.search = function search(params, callback) {
    params = echonest.network._filterParams(params, [
      'artist',
      'combined',
      'description',
      'style',
      'mood',
      'rank_type',
      'artist_id',
      'results',
      'start',
      'song_type',
      'max_tempo',
      'min_tempo',
      'max_duration',
      'min_duration',
      'max_loudness',
      'min_loudness',
      'artist_max_familiarity',
      'artist_min_familiarity',
      'artist_start_year_before',
      'artist_start_year_after',
      'artist_end_year_before',
      'artist_end_year_after',
      'song_max_hotttnesss',
      'song_min_hotttnesss',
      'artist_max_hotttnesss',
      'artist_min_hotttnesss',
      'min_longitude',
      'max_longitude',
      'min_latitude',
      'max_latitude',
      'max_danceability',
      'min_danceability',
      'max_energey',
      'min_energy',
      'max_liveness',
      'min_liveness',
      'max_speechiness',
      'min_speechiness',
      'max_acousticness',
      'min_acousticness',
      'mode',
      'key',
      'bucket',
      'sort',
      'limit'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'song/search?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.profile = function profile(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'track_id',
      'bucket',
      'limit'
    ]);

    if (!params.id && !params.track_id) {
      return callback(new Error('Must specify an id or a track_id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/profile?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.identify = function identify(params, callback) {
    params = echonest.network._filterParams(params, [
      'query',
      'code',
      'artist',
      'title',
      'release',
      'duration',
      'genre',
      'version',
      'bucket'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/identify?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };
};
