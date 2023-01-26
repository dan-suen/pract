const urlDecode = function(text) {
  let obj = {}
  let keyPairs = text.split("&")
  for (let i = 0 ; i < keyPairs.length; i ++) {
    let keyAndValue = keyPairs[i].replace(/%20/g, " ").split("=")
    obj[keyAndValue[0]] = keyAndValue[1]
  }
  return obj
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);