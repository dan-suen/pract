const urlEncode = function(text) {
  return result = text.trim().split(" ").join("%20")
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));