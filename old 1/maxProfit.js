function maxProfit (array) {
  let possibleResults = []
  for (let i = 0 ; i < array.length; i ++) {
    for (let j = 0; j < array.length; j++) {
      if (j > i) {
        possibleResults.push(array[j] - array[i])
      }
    }
  }
  return Math.max(...possibleResults)
}

console.log(maxProfit([45, 24, 35, 31, 40, 38, 11]))