import sharedParams from './sharedPlaylistParams';

export default class PlaylistDynamic {
  constructor(echonest) {
    this.echonest = echonest;
  }

  create(params, callback) {
    const filter = sharedParams.slice();
    filter.push('session_catalog');

    const filteredParams = this.echonest.network._filterParams(params, filter);

    if (Array.isArray(filteredParams.session_catalog) && filteredParams.session_catalog.length > 5) {
      return callback(new Error('Cannot specify more than 5 session catalogs'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/create?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  restart(params, callback) {
    const filter = sharedParams.slice();
    filter.push('session_catalog');
    filter.push('session_id');

    const filteredParams = this.echonest.network._filterParams(params, filter);

    if (Array.isArray(filteredParams.session_catalog) && filteredParams.session_catalog.length > 5) {
      return callback(new Error('Cannot specify more than 5 session catalogs'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/restart?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  next(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'session_id',
      'results',
      'lookhead',
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/next?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  feedback(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
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
      'invalidate_artist',
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/feedback?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  steer(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
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
      'reset',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/steer?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  info(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'session_id',
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/info?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  delete(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'session_id',
    ]);

    if (!params.session_id) {
      return callback(new Error('Must specify a session id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'playlist/dynamic/delete?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }
}
