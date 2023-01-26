const organizeInstructors = function(instructors) {
  let results = {}
  for (each of instructors) {
    results[each.course] ? results[each.course].push(each.name) : results[each.course] = [each.name]
  }
  return results
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));