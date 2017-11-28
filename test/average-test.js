const Average = require('../scripts/average.js')
const assert = require('chai').assert

describe('average', function() {
  it('can return total of array', function() {
    const average = new Average([1,2,3])
    assert.equal(average.getSum, 6);
  });
  it('can return the average of array', function() {
    const average = new Average([1,2,3])
    assert.equal(average.getAverage, 2);
  })
})
