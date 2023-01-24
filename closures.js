function makeLoadedDie() {
  const list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let i = -1

  return function() {
    i ++ 
    return list[i]
  }
}

const rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

const countdownGenerator = function (x) {
  let counter = x + 1;
  return function () {
    console.log(x > 0 ? `T-minus ${x} ...` : x===0 ? "Blast Off!" : "Rockets already gone, bub!")
    x --
  }
};

const countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!