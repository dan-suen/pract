// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text){
    return text
  }
  let newString = text
  for (let a = 0; a < n; a++){
    newString = newString.split("").filter((e, i) => i % 2 !== 0).join("") + newString.split("").filter((e, i) => i % 2 === 0).join("")
  }
  return newString
}

function decrypt(encryptedText, n) {
  if (!encryptedText){
    return encryptedText
  }
  let midpoint = encryptedText.length % 2 === 0 ? Math.ceil(encryptedText.length/2) : Math.ceil(encryptedText.length/2) -1 
  let results = encryptedText.split("")
  let top, bottom
  for (let a = 0; a < n; a++){
    top = results.slice(0, midpoint)
    bottom = results.slice(midpoint)
    results = []
    for (let b = 0; b < bottom.length; b ++) {
      results.push(bottom[b])
      if (top[b]){
        results.push(top[b])
      }
    }
  }
  return results.join("")
}