var isValid = function(s) {
  let stack = [];
  let hashmap = {
   "}" : "{",
   "]":"[",
   ")" : "("
  }
  for (let i=0; i< s.length; i++){
    if(hashmap[s[i]]){
        if (hashmap[s[i]] === stack[stack.length -1]){
            stack.pop()
        } else {
            return false;
        }
    }  
    else {
        stack.push(s[i])
    }  
  }
   return stack.length === 0
};


console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));