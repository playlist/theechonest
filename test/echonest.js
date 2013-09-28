/* global describe, it, apiKey, should */

// test/echonest.js

var TheEchoNest = require('../index');

describe('TheEchoNest', function() {
  var echonest = new TheEchoNest(apiKey);

  it('should return an artist', function(done) {
    var artistId = 'ARH6W4X1187B99274F';

    echonest.artist.profile({id: artistId}, function(err, data) {
      var artist = data.artist;

      should.not.exist(err);

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
