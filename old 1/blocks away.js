const blocksAway = function(directions) {
  let changeBarings = {
    north: {
      left: "west",
      right: "east"
    },
    south: {
      left: "east",
      right: "west"
    },
    east: {
      left: "north",
      right: "south"
    },
    west: {
      left: "south",
      right: "north"
    }
  }
  let currentBarings = directions[0] === "right" ? "north" : "east"
  let netBarings = {}

  for (let i = 0; i < directions.length; i ++) {
    if (typeof directions[i] === "number") {
      netBarings[currentBarings] ? netBarings[currentBarings] += directions[i] : netBarings[currentBarings] = directions[i]
    }
    if (typeof directions[i] === "string") {
      currentBarings = changeBarings[currentBarings][directions[i]]
    }
  }
  return { 
    east : (netBarings.east || 0) - (netBarings.west || 0),
    north : (netBarings.north || 0)- (netBarings.south || 0)
  }
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));