const talkingCalendar = function(date) {
  let dateSplit = date.split("/")
  let year = dateSplit[0]
  let day
  let months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  let month = months[parseInt(dateSplit[1]) - 1]
  if (dateSplit[2] === 1) {
    day = "1st"
  } else if (dateSplit[2] === 2) {
    day = "2nd"
  } else if (dateSplit[2] === 3) {
    day = "3rd"
  } else {
    day = dateSplit[2] + "th"
  }
  return `${month} ${day}, ${year}`
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));