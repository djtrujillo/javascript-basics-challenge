// var rectangle = {width: 10, height: 20}

class Rectangle {
  constructor(width, height) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }

  get perimeter() {
    return this.calcPerimeter();
  }

  calcPerimeter() {
    return (this.height + this.width) * 2
  }

  get diagonal() {
    return this.calcDiagonal();
  }

  calcDiagonal() {
    var diagonal = Math.sqrt(Math.pow(this.height,2) + Math.pow(this.width,2))
    return Math.round( diagonal * 10 ) / 10;
  }

  isSquare() {
    if (this.height === this.width) {
      return true
    }
    return false
  }

}


module.exports = Rectangle
