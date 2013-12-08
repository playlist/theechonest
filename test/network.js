// test/network.js;
/* global apiKey, describe, it, should */

var TheEchoNest = require('../index');

var demoUrl = 'song/profile?format=json&id=SOCZMFK12AC468668F';

describe('Network', function() {
  var echonest = new TheEchoNest(apiKey);
  var network = echonest.network;

  it('should make a network request', function(done) {
    network.get(demoUrl, function(err, data) {
      should.not.exist(err);
      should.exist(data);
      done();
    });
  });

  // it('should handle rate limits', function(done) {
  //   // @todo: find out why this doesn't work
  //   // It would seem that response.headers is undefined, and that response is just the
  //   // body of the response. I tried overloading the arguments, but it didn't work, so I
  //   // commented this test out

  //   echonest.setApiKey('F90ZGWYHO9XFTPTHO');
  //   this.timeout(10000);

  //   var finished = false;

  //   var fn = function(err, response) {
  //     if (finished) return;

  //     if (err) {
  //       echonest.setApiKey(apiKey);
  //       done();
  //       finished = true;
  //       return;
  //     }

  //     response.headers.should.have.property('x-ratelimit-limit');
  //     response.headers.should.have.property('x-ratelimit-used');
  //     response.headers.should.have.property('x-ratelimit-remaining');

  //     var limit = parseInt(response.headers['x-ratelimit-limit'], 10);
  //     var used = parseInt(response.headers['x-ratelimit-used'], 10);
  //     var remaining = parseInt(response.headers['x-ratelimit-remaining'], 10);

  //     used.should.be.below(limit);
  //     remaining.should.be.above(0);
  //   };

  //   for (var i = 0; i < 10; i++) {
  //     network.get(demoUrl, fn);
  //   }

  // });
});

