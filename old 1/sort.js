const students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function advancedSort(data) {
  return data.sort((a,b) => {
    if (a.name === b.name){
      return b.age - a.age
    }
    return a.name > b.name ? 1 : -1
  })
}

console.log(advancedSort(students))