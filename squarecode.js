const squareCode = function(message) {
  let characters = message.split(" ").join("")
  let column = Math.ceil(Math.sqrt(characters.length))
  let rows = []
  for (let i = 0; i < characters.length; i += column) {
    rows.push(characters.slice(i, i + column))
  }
  let columns = []
  for (let k = 0; k < column; k ++) {
    let word = []
    for (let j = 0; j < rows.length; j ++) {
      word.push(rows[j][k])
    }
    columns.push(word.join(""))
  }
  return columns.join(" ")
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));