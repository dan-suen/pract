const checkAir = function (samples, threshold) {
  let tally = samples.map(element => element === "dirty" ? 1 : 0).reduce((prev, current) => prev + current)
  return (tally/samples.length <= threshold)? "Clean" : "Polluted"
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))