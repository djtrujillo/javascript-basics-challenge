function longestString(strings) {
  var lengthArray = []
  for(i = 0; i < strings.length; i++) {
    lengthArray.push(strings[i].length)
    return Math.max(lengthArray)
  }
}

module.exports = longestString
