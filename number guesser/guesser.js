let prompt = require("prompt-sync")();

const number = Math.floor(Math.random() * 10);
let counter = 0


const process = function () {
  let answer = prompt("Guess a number: ");
  console.log("You answered: " + answer);
  if (counter > 10) {
    return console.log("GAME OVER")
  }
  if (!parseInt(answer)) {
    counter ++
    console.log("Not a number! Try again!")
    process()
  }
  if (answer > number) {
    counter ++
    console.log("Too High!")
    process()
  } else if (answer < number) {
    counter ++
    console.log("Too Low!")
    process()
  } else if (Number(answer) === number) {
    counter ++
    return console.log(`You got it! You took ${counter} attempts!`)
  }
}

process()

  
  