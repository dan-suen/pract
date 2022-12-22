const sumLargestNumbers = function(data) {
  let max = Math.max(...data)
  let max2 = Math.max(...data.filter(n => n != max))
  return max + max2
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));