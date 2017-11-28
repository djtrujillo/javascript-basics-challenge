longestString = require('../scripts/longestString.js')
assert = require('chai').assert

describe('longestString', function() {
  it('can return longest string', function() {
    const strings = ["a", "ab", "abc"]
    assert.equal(longestString(strings), "abc")
  })




})
