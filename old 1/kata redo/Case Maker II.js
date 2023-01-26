const makeCase = function(input, cased) {
  let format = cased
  if (typeof cased === 'string') {
    format = [...cased]
  }
  let formats = {
    1: ["camel", "pascal", "snake", "kebab", "title"],
    2: ["vowel", "consonant"],
    3: ["upper", "lower"]
  }
  cased.sort((a, b)=> b - a)
  let results = input
  for (let i )


}

ectract case


console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));