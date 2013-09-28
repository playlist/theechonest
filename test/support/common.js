// test/support/common.js

var chai = require('chai');

global.should = chai.should();
global.expect = chai.expect;
global.check = function check(done, f) {
  try {
    f();
    done();
  } catch(e) {
    done(e);
  }
};

// use custom API key or the demo one from the docs
global.apiKey = process.env.ECHONEST_API_KEY || 'FILDTEOIK2HBORODV';
