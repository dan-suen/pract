const repeatNumbers = function(data) {
  let results = []
  for (let i = 0; i < data.length; i++) {
    results.push(`${data[i][0]}`.repeat(data[i][1]))
  }
  return results.join(", ")
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));