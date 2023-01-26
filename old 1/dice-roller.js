const args = process.argv[2]

function numsArray (number) {
  let array = [];
  for (let i = 0; i < number; i ++) {
    array.push(Math.ceil(Math.random()*6))
  }
  return `Rolled ${number} dice${number > 1 ? 's' : ''}: ${array.join(', ')}`
}


console.log(numsArray(args))