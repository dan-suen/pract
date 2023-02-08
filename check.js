function check (number) {
  let result = number.toString().split("")
  let checker = result.pop()
  console.log(checker)
  let numberOfDigits = result.length % 2 === 0 ? "even" : "odd"
  let total = result.map((element, index) => {
    if (numberOfDigits === "even") {
      return index % 2 === 0 ? Number(element) : (Number(element)*2).toString().split("").reduce((a,b)=> Number(a) + Number(b))
    } else {
      return index % 2 === 1 ? Number(element) : (Number(element)*2).toString().split("").reduce((a,b)=> Number(a) + Number(b))
    }
  }).reduce((a,b)=>Number(a) + Number(b))
  return ((10 - (total % 10)) % 10) == checker
}
console.log(check(79927398713))
