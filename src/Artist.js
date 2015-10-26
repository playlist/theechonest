export default class Artist {
  constructor(echonest) {
    this.echonest = echonest;
  }

  biographies(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'license',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/biographies?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  blogs(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'high_relevance',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/blogs?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  familiarity(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/familiarity?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  hotttnesss(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'type',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/hotttnesss?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  images(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'license',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/images?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  listGenres(callback) {
    const uri = 'artist/list_genres';

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  listTerms(callback) {
    const uri = 'artist/list_terms';

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  news(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
      'high_relevance',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/news?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  profile(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'bucket',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/profile?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  reviews(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/reviews?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  search(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
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
      'start',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/search?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  extract(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'results',
      'bucket',
      'limit',
      'text',
      'max_familiarity',
      'min_familiarity',
      'max_hotttnesss',
      'min_hotttnesss',
      'sort',
      'results',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/extract?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  songs(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/songs?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  similar(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
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
      'seed_catalog',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    if (Array.isArray(filteredParams.seed_catalog) && filteredParams.seed_catalog.length > 5) {
      return callback(new Error('Cannot specify more than 5 seed catalogs'));
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/similar?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  suggest(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'results',
      'name',
      'q',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/suggest?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  terms(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'sort',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/terms?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  topHottt(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'results',
      'start',
      'genre',
      'bucket',
      'limit',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/top_hottt?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  topTerms(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'results',
    ]);

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/top_terms?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  twitter(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/twitter?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  urls(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/urls?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }

  video(params, callback) {
    const filteredParams = this.echonest.network._filterParams(params, [
      'id',
      'name',
      'results',
      'start',
    ]);

    if (!filteredParams.id && !filteredParams.name) {
      return callback(new Error('Must specify an id or a name'), null);
    }

    const query = this.echonest.network._buildQuery(filteredParams);

    const uri = 'artist/video?' + query;

    this.echonest.network.get(uri, (err, data) => {
      if (err) return callback(err, null);

      callback(null, data);
    });
  }
}
