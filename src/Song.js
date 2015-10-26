export default class Song {
  constructor(echonest) {
    this.echonest = echonest;
  }

  search(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'artist',
      'title',
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
      'limit',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'song/search?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  profile(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'track_id',
      'bucket',
      'limit',
    ]);

    if (!filteredParams.id && !filteredParams.track_id) {
      return callback(new Error('Must specify an id or a track_id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'song/profile?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  identify(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'query',
      'code',
      'artist',
      'title',
      'release',
      'duration',
      'genre',
      'version',
      'bucket',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'song/identify?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }
}
