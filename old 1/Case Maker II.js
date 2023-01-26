const caseSort = function (casing) {
  return (typeof casing === "string" ? [casing] : casing).sort((a, b) => {
    let casePriority = {
      camel : 1, pascal : 1, snake : 1, kebab : 1, title : 1, vowel : 2, consonant : 2, upper : 3, lower : 3
    }
    if (casePriority[a] > casePriority[b]) {
      return 1
    } 
    if (casePriority[a] < casePriority[b]) {
      return -1
    } 
    if (casePriority[a] === casePriority[b]) {
      return 0
    } 
  })
}
function camel (string) {
  return string.split(" ").map((element, index) => {
    if (index === 0){
      return element
    }
    return element[0].toUpperCase() + element.substring(1)
  }).join("")
}

function pascal (string) {
  return string.split(" ").map((element) => element[0].toUpperCase() + element.substring(1)).join("")
}

function snake (string) {
  return string.split(" ").join("_")
}

function kebab (string) {
  return string.split(" ").join("-")
}

function title (string) {
  return string.split(" ").map((element) => {
    if (["the", "an", "a"].includes(element)){
      return element
    }
    return element[0].toUpperCase() + element.substring(1)
  }).join(" ")
}

function vowel (string) {
  return string.split("").map((element) => {
    if (["a", "e", "i", "o", "u"].includes(element)){
      return element.toUpperCase()
    }
    return element.toLowerCase()
  }).join("")
}

function consonant (string) {
  return string.split("").map((element) => {
    if (!["a", "e", "i", "o", "u"].includes(element)){
      return element.toUpperCase()
    }
    return element.toLowerCase()
  }).join("")
}



const makeCase = function(input, casing) {
  let string = input;
  let cases = caseSort(casing)
  for (let i = 0 ; i < cases.length; i ++) {
    switch (cases[i]) {
      case "camel":
      string = camel(string)
      break;
      case "pascal":
      string = pascal(string)
      break;
      case "snake":
      string = snake(string)
      break;
      case "kebab":
      string = kebab(string)
      break;
      case "title":
      string = title(string)
      break;
      case "vowel":
      string = vowel(string)
      break;
      case "consonant":
      string = consonant(string)
      break;
      case "upper":
      string = string.toUpperCase()
      break;
      case "lower":
      string = string.toLowerCase()
      break;
    }
  }
  return string
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
console.log(makeCase("this is a string", ["upper", "lower", "kebab", "snake"]));