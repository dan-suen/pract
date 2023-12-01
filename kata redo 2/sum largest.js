const sumLargestNumbers = function(data) {
  let results= data.sort((a,b)=> a-b)
  return results[results.length-2] + results[results.length-1]
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));