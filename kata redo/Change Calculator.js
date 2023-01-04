const calculateChange = function(total, cash) {
  let change = cash - total
  let counter = {}
  while (change > 2000) {
    counter.twentyDollar ? counter.twentyDollar ++ : counter.twentyDollar = 1
    change -= 2000
  }
  while (change > 1000) {
    counter.tenDollar ? counter.tenDollar ++ : counter.tenDollar = 1
    change -= 1000
  }
  while (change > 500) {
    counter.fiveDollar ? counter.fiveDollar ++ : counter.fiveDollar = 1
    change -= 500
  }
  while (change > 200) {
    counter.twoDollar ? counter.twoDollar ++ : counter.twoDollar = 1
    change -= 200
  }
  while (change > 100) {
    counter.oneDollar ? counter.oneDollar ++ : counter.oneDollar = 1
    change -= 100
  }
  while (change > 25) {
    counter.quarter ? counter.quarter ++ : counter.quarter = 1
    change -= 25
  }
  while (change > 10) {
    counter.dime ? counter.dime ++ : counter.dime = 1
    change -= 10
  }
  while (change > 5) {
    counter.nickel ? counter.nickel ++ : counter.nickel = 1
    change -= 5
  }
  while (change > 0) {
    counter.penny ? counter.penny ++ : counter.penny = 1
    change -= 1
  }
  return counter
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));