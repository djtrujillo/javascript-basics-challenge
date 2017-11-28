const isTriangle = require('../scripts/triangle.js')
const assert = require('chai').assert

describe('isTriangle', function() {
  it('determines if triangle', function() {
    assert.isTrue(isTriangle(2,2,2))
    assert.isFalse(isTriangle(0,0,0))
    assert.isFalse(isTriangle(-1,0,1))
  })
})
