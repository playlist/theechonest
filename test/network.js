// test/network.js;

var chai = require('chai');
chai.should();

var Network = require('../lib/network');

describe('Network', function() {
  var network = new Network();

  it('should make a network request', function(done) {
    network.get('http://developer.echonest.com/api/v4/song/profile?api_key=FILDTEOIK2HBORODV&format=json&id=SOCZMFK12AC468668F').then(function(response) {
      //console.log(response);
      var test = true;
      test.should.equal(true);
      done();
    }).fail(function(error) {
      console.error(error);
    });
  });
});

