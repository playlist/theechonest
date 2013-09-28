/*jshint -W024 */

// lib/playlist.js

var _ = require('lodash');

module.exports = function song(echonest) {
  var sharedParams = [
    'type',
    'artist_pick',
    'variety',
    'distribution',
    'adventurousness',
    'artist_id',
    'artist',
    'seed_catalog',
    'song_id',
    'track_id',
    'description',
    'genre',
    'style',
    'mood',
    'max_tempo',
    'min_tempo',
    'max_duration',
    'min_duration',
    'max_loudness',
    'min_loudness',
    'max_danceability',
    'min_danceability',
    'max_energy',
    'min_energy',
    'max_liveness',
    'min_liveness',
    'max_speechiness',
    'min_speechiness',
    'max_acousticness',
    'min_acousticness',
    'artist_max_familiarity',
    'artist_min_familiarity',
    'artist_max_hotttnesss',
    'artist_min_hotttnesss',
    'song_type',
    'artist_start_year_before',
    'artist_start_year_after',
    'artist_end_year_before',
    'artist_end_year_after',
    'song_max_hotttnesss',
    'song_min_hotttnesss',
    'bucket',
    'sort',
    'dmca',
    'limited_interactivity'
  ];

  this.static = function static(params, callback) {
    var filter = sharedParams.slice(0);
    filter.push('results');

    params = echonest.network._filterParams(params, filter);

    if (params.dmca) {
      return callback(new Error('The dmca param is deprecated - please use limited_interactivity'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/static?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic = {};

  this.dynamic.create = function create(params, callback) {
    var filter = sharedParams.slice();
    filter.push('session_catalog');

    params = echonest.network._filterParams(params, filter);

    if (_.isArray(params.session_catalog) && params.session_catalog.length > 5) {
      return callback(new Error('Cannot specify more than 5 session catalogs'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/create?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic.restart = function restart(params, callback) {
    var filter = sharedParams.slice();
    filter.push('session_catalog');
    filter.push('session_id');

    params = echonest.network._filterParams(params, filter);

    if (_.isArray(params.session_catalog) && params.session_catalog.length > 5) {
      return callback(new Error('Cannot specify more than 5 session catalogs'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/restart?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic.next = function next(params, callback) {
    params = echonest.network._filterParams(params, [
      'session_id',
      'results',
      'lookhead'
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/next?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic.feedback = function feedback(params, callback) {
    params = echonest.network._filterParams(params, [
      'session_id',
      'ban_artist',
      'favorite_artist',
      'ban_song',
      'skip_song',
      'favorite_song',
      'play_song',
      'unplay_song',
      'rate_song',
      'update_catalog',
      'invalidate_song',
      'invalidate_artist'
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/feedback?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic.steer = function steer(params, callback) {
    params = echonest.network._filterParams(params, [
      'session_id',
      'min_tempo',
      'max_tempo',
      'target_tempo',
      'min_loudness',
      'max_loudness',
      'target_loudness',
      'min_danceability',
      'max_danceability',
      'target_danceability',
      'min_energy',
      'max_energy',
      'target_energy',
      'min_liveness',
      'max_liveness',
      'target_liveness',
      'min_speechiness',
      'max_speechiness',
      'target_speechiness',
      'min_acousticness',
      'max_acousticness',
      'target_acousticness',
      'min_song_hotttnesss',
      'max_song_hotttnesss',
      'target_song_hotttnesss',
      'min_artist_hotttnesss',
      'max_artist_hotttnesss',
      'target_artist_hotttnesss',
      'min_artist_familiarity',
      'max_artist_familiarity',
      'target_artist_familiarity',
      'more_like_this',
      'less_like_this',
      'adventurousness',
      'variety',
      'description',
      'style',
      'song_type',
      'mood',
      'reset'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/steer?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic.info = function info(params, callback) {
    params = echonest.network._filterParams(params, [
      'session_id'
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/info?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.dynamic.delete = function delete(params, callback) {
    params = echonest.network._filterParams(params, [
      'session_id'
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'playlist/dynamic/delete?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };
};
