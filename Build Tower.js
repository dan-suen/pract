// Build Tower
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
  let results = [];
  let stringLength = 2*nFloors - 1
  for (let i = 0; i < nFloors; i++){
    let asteriskLength = 1 + 2*i
    let spaceLength = (stringLength - asteriskLength)/2
    results.push(" ".repeat(spaceLength) + "*".repeat(asteriskLength) + " ".repeat(spaceLength))
    console.log(results)
  }
  return results
}