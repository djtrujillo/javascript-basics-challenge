const Rectangle = require('../scripts/rectangle.js')
const assert = require('chai').assert

describe('rectangle', function() {
  it('can return area of rectangle', function() {
    const rectangle = new Rectangle(10,20)
    assert.equal(rectangle.area, 200);
  });

  it('can return perimeter of rectangle', function() {
    const rectangle = new Rectangle(10,20)
    assert.equal(rectangle.perimeter, 60)
  });

  it('can return diagonal of rectangle', function() {
    const rectangle = new Rectangle(10, 20)
    assert.equal(rectangle.diagonal, 22.4)
  });

  it('can determine if square', function() {
    const rectangle = new Rectangle(10,20)
    const square = new Rectangle(10,10)
    assert.isTrue(square.isSquare())
    assert.isFalse(rectangle.isSquare())
  })
});
