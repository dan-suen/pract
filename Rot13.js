// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
function rot13(message){
  const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let parts = message.split("").map(element => {
    if (element.match(/[^a-zA-Z]/)) {
      return element
    }
    let newIndex = (alphabet.indexOf(element.toUpperCase()) + 13) % 26
    return element.toUpperCase() === element ? alphabet[newIndex] : alphabet[newIndex].toLowerCase()
  })
  return parts.join("")
}