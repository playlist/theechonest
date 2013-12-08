/* global describe, it, apiKey, should */

// test/echonest.js

var TheEchoNest = require('../index');

var artistId = 'ARH6W4X1187B99274F';

describe('Artist Profile', function() {
  var echonest = new TheEchoNest(apiKey);
  
  // Artist Profile

  it('should return an artist', function(done) {
    echonest.artist.profile({id: artistId}, function(err, data) {
      should.not.exist(err);
      
      var artist = data.artist;

      artist.should.be.an('object');

      artist.should.have.property('id');
      artist.id.should.equal(artistId);

      artist.should.have.property('name');

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.artist.profile({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.artist.profile({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe('Artist Biographies', function() {
  var echonest = new TheEchoNest(apiKey);
  
  // Artist Biographies

  it('should return an artist', function(done) {
    echonest.artist.biographies({id: artistId}, function(err, data) {
      should.not.exist(err);
      data.total.should.be.above(0);
      var biography = data.biographies[0];

      biography.should.be.an('object');

      biography.should.have.property('text');

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.artist.biographies({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.artist.biographies({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe('Artist Blogs', function() {
  var echonest = new TheEchoNest(apiKey);
  
  // Artist Blogs

  it('should return an artist', function(done) {
    echonest.artist.blogs({id: artistId}, function(err, data) {
      should.not.exist(err);
      data.total.should.be.above(0);
      var blog = data.blogs[0];

      blog.should.be.an('object');

      blog.should.have.property('id');

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.artist.blogs({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.artist.blogs({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe('Artist Familiarity', function() {
  var echonest = new TheEchoNest(apiKey);
  
  // Artist Familiarity

  it('should return an artist', function(done) {
    echonest.artist.familiarity({id: artistId}, function(err, data) {
      should.not.exist(err);
      var artist = data.artist;

      artist.should.be.an('object');

      artist.should.have.property('familiarity');

      artist.familiarity.should.be.an('number');
      artist.familiarity.should.be.above(0);
      artist.familiarity.should.be.below(1);

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.artist.familiarity({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.artist.familiarity({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe('Artist Hotttnesss', function() {
  var echonest = new TheEchoNest(apiKey);
  
  // Artist Hotttnesss

  it('should return an artist', function(done) {
    echonest.artist.hotttnesss({id: artistId}, function(err, data) {
      should.not.exist(err);
      var artist = data.artist;

      artist.should.be.an('object');

      artist.should.have.property('hotttnesss');

      artist.hotttnesss.should.be.an('number');
      artist.hotttnesss.should.be.above(0);
      artist.hotttnesss.should.be.below(1);

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.artist.hotttnesss({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.artist.hotttnesss({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe('Artist Images', function() {
  var echonest = new TheEchoNest(apiKey);
  
  // Artist Images

  it('should return an artist', function(done) {
    echonest.artist.images({id: artistId}, function(err, data) {
      should.not.exist(err);
      var images = data.images;

      images.should.be.an('array');

      data.total.should.be.above(0);
      images.length.should.be.above(0);

      images[0].should.have.property('url');
      images[0].should.have.property('license');

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.artist.images({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.artist.images({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});
