/* global describe, it, apiKey, should */

// test/echonest.js

var TheEchoNest = require('../index');

describe('Song Profile', function() {
  var echonest = new TheEchoNest(apiKey);

  // Song Profile

  it('should return a song', function(done){
    var songId = 'SOCZMFK12AC468668F';

    echonest.song.profile({id:songId},function(err,data){
      should.not.exist(err);

      var song = data.songs[0];

      song.should.be.an('object');

      song.should.have.property('id');
      song.should.have.property('title');

      song.id.should.equal(songId);

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.song.profile({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.song.profile({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe('Song Search', function() {
  var echonest = new TheEchoNest(apiKey);

  // Song Search

  var songTitle = 'Karma Police';
  var songArtist = 'Radiohead';

  it('should return a song', function(done){
    echonest.song.search({title:songTitle,artist:songArtist},function(err,data){
      should.not.exist(err);

      var song = data.songs[0];

      song.should.be.an('object');

      song.should.have.property('id');
      song.should.have.property('title');

      song.artist_name.should.equal(songArtist);

      done();
    });
  });

  it('should return a song with blank artist', function(done){
    echonest.song.search({title:songTitle},function(err,data){
      should.not.exist(err);

      var song = data.songs[0];

      song.should.be.an('object');

      song.should.have.property('id');
      song.should.have.property('title');

      done();
    });
  });

  it('should return a song with blank title', function(done){
    echonest.song.search({artist:songArtist},function(err,data){
      should.not.exist(err);

      var song = data.songs[0];

      song.should.be.an('object');

      song.should.have.property('id');
      song.should.have.property('title');

      song.artist_name.should.equal(songArtist);

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.song.profile({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid ID', function(done) {
    echonest.song.profile({id: 'fakeid'}, function(err) {
      should.exist(err);
      done();
    });
  });
});

describe.skip('Song Identify', function() {
  var echonest = new TheEchoNest(apiKey);

  // Song Identify

  var songCode = 'eJxVlIuNwzAMQ1fxCDL133-xo1rnGqNAEcWy_ERa2aKeZmW9ustWVYrXrl5bthn_laFkzguNWpklEmoTB74JKYZSPlbJ0sy9fQrsrbEaO9W3bsbaWOoK7IhkHFaf_ag2d75oOQSZczbz5CKA7XgTIBIXASvFi0A3W8pMUZ7FZTWTVbujCcADlQ_f_WbdRNJ2vDUwSF0EZmFvAku_CVy440fgiIvArWZZWoJ7GWd-CVTYC5FCFI8GQdECdROE20UQfLoIUmhLC7IiByF1gzbAs3tsSKctyC76MPJlHRsZ5qhSQhu_CJFcKtW4EMrHSIrpTGLFqsdItj1H9JYHQYN7W2nkC6GDPjZTAzL9dx0fS4M1FoROHh9YhLHWdRchQSd_CLTpOHkQQP3xQsA2-sLOUD7CzxU0GmHVdIxh46Oide0NrNEmjghG44Ax_k2AoDHsiV6WsiD6OFm8y-0Lyt8haDBBzeMlAnTuuGYIB4WA2lEPAWbdeOabgFN6TQMs6ctLA5fHyKMBB0veGrjPfP00IAlWNm9n7hEh5PiYYBGKQDP-x4F0CL8HkhoQnRWN997JyEpnHFR7EhLPQMZmgXS68hsHktEVErranvSSR2VwfJhQCnkuwhBUcINNY-xu1pmw3PmBqU9-8xu0kiF1ngOa8vwBSSzzNw==';

  it('should return a song', function(done){
    echonest.song.identify({code:songCode},function(err,data){
      should.not.exist(err);

      var song = data.songs[0];

      song.should.be.an('object');

      song.should.have.property('id');
      song.should.have.property('message');
      song.should.have.property('title');

      done();
    });
  });

  it('should fail with blank parameters', function(done) {
    echonest.song.profile({}, function(err) {
      should.exist(err);
      done();
    });
  });

  it('should fail with an invalid code', function(done) {
    echonest.song.profile({code: 'fakecode'}, function(err) {
      should.exist(err);
      done();
    });
  });
});
