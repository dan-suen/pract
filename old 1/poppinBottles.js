let money = process.argv[2]

let info = {
  totalBottles : Math.floor(money/2),
  totalEmptyBottles : 0,
  totalCaps : 0,
  caps : Math.floor(money/2),
  emptyBottles : Math.floor(money/2),
}

function bottles (data) {
  let {totalBottles, caps, emptyBottles, totalEmptyBottles, totalCaps} = data
  let newBottles = Math.floor(caps/4) + Math.floor(emptyBottles/2)
  totalEmptyBottles += Math.floor(emptyBottles/2)
  totalCaps += Math.floor(caps/4)
  caps = (caps % 4) + newBottles
  emptyBottles = (emptyBottles % 2) + newBottles

  let data2 
  if (newBottles > 0) {
    data2 = bottles({totalBottles:newBottles, caps, emptyBottles, totalEmptyBottles, totalCaps})
    totalBottles += data2.totalBottles
    caps = data2.caps
    emptyBottles = data2.emptyBottles
    totalEmptyBottles = data2.totalEmptyBottles
    totalCaps = data2.totalCaps
  }

  return {totalBottles, caps, emptyBottles, totalEmptyBottles, totalCaps}
}

let results = bottles(info)
console.log({
  "Total Bottles" : results.totalBottles,
  "Total Purchased" : info.totalBottles,
  "Total Earned" : {
    "Total" : results.totalBottles - info.totalBottles,
    "Bottles" : results.totalEmptyBottles,
    "Caps" : results.totalCaps
  }
})
