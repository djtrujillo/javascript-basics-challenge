class Average {
  constructor(array) {
    this.array
  }

  getSum(total, num) {
    return total + num
  }

  getAverage() {
    return this.average
  }

  average() {
    var total = 0;
    for(var i = 0; i < this.length; i++) {
      total += grades[i]
    }
    return total / this.length
  }

  total() {
    return this.reduce(getSum, 0);
  }
}

module.exports = Average
