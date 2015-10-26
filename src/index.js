import Artist from './Artist';
import Catalog from './Catalog';
import Network from './Network';
import PlaylistDynamic from './PlaylistDynamic';
import Song from './Song';
import Track from './Track';

import sharedPlaylistParams from './sharedPlaylistParams';

export default class TheEchoNest {
  constructor(apiKey) {
    this.baseUri = 'http://developer.echonest.com/api/v4/';
    this.apiKey = apiKey;

    this.network = new Network(this);
    this.artist = new Artist(this);
    this.song = new Song(this);
    this.track = new Track(this);
    this.playlistDynamic = new PlaylistDynamic(this);
    this.catalog = new Catalog(this);
  }

  getApiKey() {
    return this.apiKey;
  }

  setApiKey(key) {
    this.apiKey = key;
  }

  playlistStatic(params, callback) {
    const filter = sharedPlaylistParams.slice(0);
    filter.push('results');

    const filteredParams = this.network._filterParams(params, filter);

    if (params.dmca) {
      return callback(new Error('The dmca param is deprecated - please use limited_interactivity'), null);
    }

    const query = this.network._buildQuery(filteredParams);

    const uri = 'playlist/static?' + query;

    this.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }
}
