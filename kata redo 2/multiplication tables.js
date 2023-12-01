const multiplicationTable = function (maxValue) {
  let results = [];
  for (let i = 1; i <= maxValue; i ++) {
    let row = []
    for (let j = 1; j <= maxValue; j ++) {
      row.push(i*j)
    }
    results.push(row.join(" "))
  }
  return results.join("\n");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));