const urlEncode = function(text) {
  let trimmed = text.trim()
  let newString = []
  for (let i = 0; i <= trimmed.length; i++){
    if (trimmed[i] === " ") {
      newString.push("%20")
    } else {
      newString.push(trimmed[i])
    }
  }
  return newString.join("")
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

//  Do Not use String.prototype.replace