export default class Catalog {
  constructor(echonest) {
    this.echonest = echonest;
  }

  create(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'name',
      'type',
    ]);

    if (!filteredParams.name || !filteredParams.type) {
      return callback(new Error('Must specify a name and a type'), null);
    }

    const uri = 'catalog/create';

    this.echonest.network.post(uri, filteredParams, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  update(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'data',
    ]);

    if (!filteredParams.id || !filteredParams.data) {
      return callback(new Error('Must specify an id and data'), null);
    }

    const uri = 'catalog/update';

    this.echonest.network.post(uri, filteredParams, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  keyvalues(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
    ]);

    if (!filteredParams.id) {
      return callback(new Error('Must specify an id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/keyvalues?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  play(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'item',
      'plays',
    ]);

    if (!filteredParams.id || !filteredParams.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/play?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  skip(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'item',
      'skips',
    ]);

    if (!filteredParams.id || !filteredParams.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/skip?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  favorite(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'item',
      'favorite',
    ]);

    if (!filteredParams.id || !filteredParams.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/favorite?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  ban(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'item',
      'ban',
    ]);

    if (!filteredParams.id || !filteredParams.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/ban?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  rate(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'item',
      'rating',
    ]);

    if (!filteredParams.id || !filteredParams.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/rate?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  status(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'ticket',
    ]);

    if (!filteredParams.ticket) {
      return callback(new Error('Must specify a ticket'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/status?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  profile(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
    ]);

    if (!filteredParams.id || !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/profile?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  read(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'item_id',
      'bucket',
      'results',
      'start',
    ]);

    if (!filteredParams.id) {
      return callback(new Error('Must specify an id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/read?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  feed(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'bucket',
      'results',
      'start',
      'since',
      'high_relevance',
    ]);

    if (!filteredParams.id) {
      return callback(new Error('Must specify an id'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/feed?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  delete(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
    ]);

    if (!filteredParams.id) {
      return callback(new Error('Must specify an id'), null);
    }

    const uri = 'catalog/delete';

    this.echonest.network.post(uri, filteredParams, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  list(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'results',
      'start',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/list?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  similar(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'results',
      'start',
      'keyvalue',
    ]);

    if (!filteredParams.id) {
      return callback(new Error('Must specify an id'), null);
    }

    if (Array.isArray(filteredParams.id) && filteredParams.id.length > 10) {
      return callback(new Error('Must not specify more than 10 IDs'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/similar?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  predict(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'category',
    ]);

    if (!filteredParams.id || !filteredParams.category) {
      return callback(new Error('Must specify an id and at least one category'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'catalog/predict?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }
}
