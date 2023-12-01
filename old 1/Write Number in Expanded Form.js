// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '700

function expandedForm(num) {
  let stringified = String(num).split("")
  let digits = stringified.length
  let results = []
  for (let i = 0; i < digits; i++) {
    results.push(stringified[i] + "0".repeat(digits - i - 1)) 
  } 
  return results.filter(element => element != 0).join(" + ")
}