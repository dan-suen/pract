const data = {
  f01: {
    name: "Alice",
    age: 45,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f02", "f04", "f05", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

// function biggestFollower(items) {
//   let obj = {}
//   for (each in items) {
//     obj[items[each].name] = items[each].follows.length
//   }
//   return Object.keys(obj).filter(element => obj[element] === Math.max(...Object.values(obj)))[0];
// }
// console.log(biggestFollower(data))

// function mostPopular(items) {
//   let array = []
//   for (each in items) {
//     array.push(... items[each].follows)
//   }
//   let arrayWithNames = array.map(element => items[element].name)
//   console.log(arrayWithNames)
//   let obj = {}
//   for (let i = 0; i < arrayWithNames.length; i ++) {
//     obj[arrayWithNames[i]] ? obj[arrayWithNames[i]] ++ : obj[arrayWithNames[i]] = 1
//   }
//   return Object.keys(obj).filter(element => obj[element] === Math.max(...Object.values(obj)))[0];

// }
// console.log(mostPopular(data))

function printAll(items) {
  let obj = {}
  for (let each in items) {
    let currentName = items[each].name
    obj[currentName] = {
      follows : items[each].follows.map(element => items[element].name),
      followedBy : []
    }
    for (let each2 in items) {
      if (items[each2].follows.includes(each)){
        obj[currentName].followedBy.push(items[each2].name)
      }
    }
  }

  return obj;
}



// console.log(printAll(data))


// function unrequitedFollowers(items) {
//   let info = printAll(items);
//   //obj version
//   // let obj = {}
//   // for (let each in info) {
//   //   let follows = info[each].follows
//   //   let followedBy = info[each].followedBy
//   //   obj[each] = follows.filter(element => !followedBy.includes(element))
//   // }
//   // return obj

//   //array version
//   let array = []
//   for (let each in info) {
//     let follows = info[each].follows
//     let followedBy = info[each].followedBy
//     if (follows.filter(element => !followedBy.includes(element)).length > 0)
//     array.push(each) 
//   }
//   return array
// }
// console.log(unrequitedFollowers(data))


// function followersOver30 (items) {
//   let info = printAll(items)
//   let ages = {}
//   for (let each in items) {
//     ages[items[each].name] = items[each].age 
//   }
//   let obj = {}
//   for (let each in info) {
//     obj[each] = info[each].followedBy.map(element => ages[element] > 30 ? 1 : 0).reduce((a,b)=> a+b)
//   }
//   return Object.keys(obj).filter(element => obj[element] === Math.max(...Object.values(obj)))[0];
// }



// console.log(followersOver30(data))

// function followsOver30 (items) {
//   let info = printAll(items)
//   let ages = {}
//   for (let each in items) {
//     ages[items[each].name] = items[each].age 
//   }
//   let obj = {}
//   for (let each in info) {
//     obj[each] = info[each].follows.map(element => ages[element] > 30 ? 1 : 0).reduce((a,b)=> a+b)
//   }
//   return Object.keys(obj).filter(element => obj[element] === Math.max(...Object.values(obj)))[0];
// }



// console.log(followsOver30(data))

function reach (items) {
  let info = printAll(items)
  let obj = {}
  for (let each in info) {
    obj[each] = [... new Set (info[each].follows,  info[each].followedBy)].length
  }
  return obj
}



console.log(reach(data))