export default class Track {
  constructor(echonest) {
    this.echonest = echonest;
  }

  profile(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'md5',
      'bucket',
    ]);

    if (!filteredParams.id && !filteredParams.md5) {
      return callback(new Error('Must specify an id or a md5'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'track/profile?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  upload(params, callback) {
    callback(new Error('Upload not implemented', null));
  }
}
