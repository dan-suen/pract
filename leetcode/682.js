var calPoints = function(operations) {
  let scores = [];
  for (let i = 0 ; i< operations.length; i ++) {
      if (parseInt(operations[i])) {
          scores.push(parseInt(operations[i]))
      }
      if (operations[i] === "D"){
          scores.push(2*scores[scores.length-1])
      }
      if (operations [i] === "C") {
          scores.pop()
      }
      if (operations[i] === "+") {
          scores.push(scores[scores.length-1] + scores[scores.length-2] )
      }
  }
  return scores.reduce((a,b)=> a+b, 0)
};

console.log(calPoints(["5","2","C","D","+"]))