function isTriangle(a, b, c) {
  // if (a === 0 || b === 0 || c === 0) {
  //   return "false, because a triangle can't have 0 lenth sides"
  // };
  // if (a < 0 || b < 0 || c < 0) {
  //   return "false, because a triangle can't have negative length sides"
  // };
  let max = Math.max(a, b, c);
  let sum = a + b + c;
  return sum - max > max;
}

module.exports = isTriangle
