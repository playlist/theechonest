// lib/artist.js

var _ = require('lodash');

module.exports = function artist(echonest) {
  this.biographies = function biographies(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'license'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/biographies?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.blogs = function blogs(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'high_relevance'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/blogs?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.familiarity = function familiarity(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/familiarity?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.hotttnesss = function hotttnesss(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'type'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/hotttnesss?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.images = function images(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'license'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/images?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.list_genres = function list_genres(callback) {
    var uri = 'artist/list_genres';

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.list_terms = function list_terms(callback) {
    var uri = 'artist/list_terms';

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.news = function news(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'high_relevance'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/news?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.profile = function profile(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'bucket'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/profile?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.reviews = function reviews(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/reviews?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.limit = function limit(params, callback) {
    params = echonest.network._filterParams(params, [
      'bucket',
      'limit',
      'artist_location',
      'name',
      'description',
      'genre',
      'style',
      'mood',
      'rank_type',
      'fuzzy_match',
      'max_familiarity',
      'min_familiarity',
      'max_hotttnesss',
      'min_hotttnesss',
      'artist_start_year_before',
      'artist_start_year_after',
      'artist_end_year_before',
      'artist_end_year_after',
      'sort',
      'results',
      'start'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/limit?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.extract = function extract(params, callback) {
    params = echonest.network._filterParams(params, [
      'results',
      'bucket',
      'limit',
      'text',
      'max_familiarity',
      'min_familiarity',
      'max_hotttnesss',
      'min_hotttnesss',
      'sort',
      'results'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/extract?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.songs = function songs(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/songs?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.similar = function similar(params, callback) {
    params = echonest.network._filterParams(params, [
      'results',
      'min_results',
      'start',
      'bucket',
      'max_familiarity',
      'min_familiarity',
      'max_hotttnesss',
      'min_hotttnesss',
      'artist_start_year_before',
      'artist_start_year_after',
      'artist_end_year_before',
      'artist_end_year_after',
      'limit',
      'seed_catalog'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    if (_.isArray(params.seed_catalog) && params.seed_catalog.length > 5) {
      return callback(new Error('Cannot specify more than 5 seed catalogs'));
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/similar?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.suggest = function suggest(params, callback) {
    params = echonest.network._filterParams(params, [
      'results',
      'name',
      'q'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/suggest?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.terms = function terms(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'sort'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/terms?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.top_hottt = function top_hottt(params, callback) {
    params = echonest.network._filterParams(params, [
      'results',
      'start',
      'genre',
      'bucket',
      'limit'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/top_hottt?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.top_terms = function top_terms(params, callback) {
    params = echonest.network._filterParams(params, [
      'results'
    ]);

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/top_terms?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.twitter = function twitter(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/twitter?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.urls = function urls(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/urls?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

  this.video = function video(params, callback) {
    params = echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start'
    ]);

    if (!params.id && !params.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    var query = echonest.network._buildQuery(params);

    var uri = 'artist/video?' + query;

    echonest.network.get(uri, function(err, data) {
      if (err) return callback(err, null);

      callback(null, data.artist);
    });
  };

};
