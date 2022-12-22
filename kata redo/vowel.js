const numberOfVowels = function(data) {
  let results = data.split("").map(element => {
    if (element === "a" || element === "e"|| element === "i"|| element === "o"|| element === "u"){
      return 1
    }
    return 0
  })
  return results.reduce((a,b)=> a+b)
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));