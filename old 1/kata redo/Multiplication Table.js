const multiplicationTable = function(maxValue) {
  let results = []
  for (let i = 0; i < maxValue; i ++) {
    results.push([]);
    for (let j = 0; j < maxValue; j ++) {
      results[i].push((i+1)*(j+1))
    }
  }
  return results.map(element => element.join(" ")).join("\n")
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));