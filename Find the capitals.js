// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
var capitals = function (word) {
	return word.split("").map((element,index) => {
    if (element.toUpperCase() === element) {
      return index
    }
  }).filter(element => element || element === 0)
};