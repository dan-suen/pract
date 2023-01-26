const camelCase = function(input) {
  return input.split(" ").map(element => element[0].toUpperCase() + element.slice(1)).join("")
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));