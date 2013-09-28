// lib/theechonest.js

var Network = require('./network');
var Artist = require('./artist');
var Song = require('./song');

module.exports = function TheEchoNest(apiKey) {

  this.baseUri = 'http://developer.echonest.com/api/v4/';

  this.getApiKey = function getApiKey() {
    return apiKey;
  };

  this.setApiKey = function setApiKey(key) {
    apiKey = key;
  };

  this.network = new Network(this);

  this.artist = new Artist(this);
  this.song = new Song(this);

};
