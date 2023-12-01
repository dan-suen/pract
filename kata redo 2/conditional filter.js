const conditionalSum = function(values, condition) {
  return values.filter(function(element) {
    if (condition === "even") {
      return element % 2 === 0
    } else {
      return element % 2 !== 0
    }
  }).reduce((a,b)=>a+b, 0)
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));