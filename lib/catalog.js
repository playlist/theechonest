/*jshint -W024 */
// lib/playlist.js

var _ = require('lodash');

module.exports = function catalog(echonest) {
  this.create = function create(params, callback) {
    params = echonest.network._filterParams(params, [
      'name',
      'type'
    ]);

    if (!params.name || !params.type) {
      return callback(new Error('Must specify a name and a type'), null);
    }

    var uri = 'catalog/create';

    echonest.network.post(uri, params, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.update = function update(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'data'
    ]);

    if (!params.id || !params.data) {
      return callback(new Error('Must specify an id and data'), null);
    }

    var uri = 'catalog/update';

    echonest.network.post(uri, params, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.keyvalues = function keyvalues(params, callback) {
    params = echonest.network._filterParams(params, [
      'id'
    ]);

    if (!params.id) {
      return callback(new Error('Must specify an id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/keyvalues?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.play = function play(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'item',
      'plays'
    ]);

    if (!params.id || !params.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/play?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.skip = function skip(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'item',
      'skips'
    ]);

    if (!params.id || !params.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/skip?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.favorite = function favorite(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'item',
      'favorite'
    ]);

    if (!params.id || !params.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/favorite?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.ban = function ban(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'item',
      'ban'
    ]);

    if (!params.id || !params.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/ban?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.rate = function rate(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'item',
      'rating'
    ]);

    if (!params.id || !params.item) {
      return callback(new Error('Must specify a id and a item'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/rate?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.status = function status(params, callback) {
    params = echonest.network._filterParams(params, [
      'ticket'
    ]);

    if (!params.ticket) {
      return callback(new Error('Must specify a ticket'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/status?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.profile = function profile(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name'
    ]);

    if (!params.id || !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/profile?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.read = function read(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'item_id',
      'bucket',
      'results',
      'start'
    ]);

    if (!params.id) {
      return callback(new Error('Must specify an id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/read?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.feed = function feed(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'bucket',
      'results',
      'start',
      'since',
      'high_relevance'
    ]);

    if (!params.id) {
      return callback(new Error('Must specify an id'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/feed?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.delete = function(params, callback) {
    params = echonest.network._filterParams(params, [
      'id'
    ]);

    if (!params.id) {
      return callback(new Error('Must specify an id'), null);
    }

    var uri = 'catalog/delete';

    echonest.network.post(uri, params, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.list = function list(params, callback) {
    params = echonest.network._filterParams(params, [
      'results',
      'start'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/list?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.similar = function similar(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'results',
      'start',
      'keyvalue'
    ]);

    if (!params.id) {
      return callback(new Error('Must specify an id'), null);
    }

    if (_.isArray(params.id) && params.id.length > 10) {
      return callback(new Error('Must not specify more than 10 IDs'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/similar?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };

  this.predict = function predict(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'category'
    ]);

    if (!params.id || !params.category) {
      return callback(new Error('Must specify an id and at least one category'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'catalog/predict?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data);
    });
  };
};
