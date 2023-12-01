const instructorWithLongestName = function (instructors) {
  let x = 0;
  let y = 0;
  for (let i=0; i< instructors.length; i ++) {
    if (instructors[i].name.length > x) {
      x = instructors[i].name.length;
      y = i
    }
  }
  return instructors[y]
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);