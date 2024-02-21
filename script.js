// getting giveaway date and printing it to the DOM

const giveawayEndDate = new Date("February 26 2024 20:30:00");

var giveawayEndWeekday;

switch (giveawayEndDate.getDay()) {
  case 0:
    giveawayEndWeekday = "Sunday";
    break;
  case 1:
    giveawayEndWeekday = "Monday";
    break;
  case 2:
    giveawayEndWeekday = "Tuesday";
    break;
  case 3:
    giveawayEndWeekday = "Wednesday";
    break;
  case 4:
    giveawayEndWeekday = "Thursday";
    break;
  case 5:
    giveawayEndWeekday = "Friday";
    break;
  case 6:
    giveawayEndWeekday = "Saturday";
    break;
  default:
    console.log("Something went wrong");
}

var giveawayEndMonth;

switch (giveawayEndDate.getMonth()) {
  case 0:
    giveawayEndMonth = "January";
    break;
  case 1:
    giveawayEndMonth = "February";
    break;
  case 2:
    giveawayEndMonth = "March";
    break;
  case 3:
    giveawayEndMonth = "April";
    break;
  case 4:
    giveawayEndMonth = "May";
    break;
  case 5:
    giveawayEndMonth = "June";
    break;
  case 6:
    giveawayEndMonth = "July";
    break;
  case 7:
    giveawayEndMonth = "August";
    break;
  case 8:
    giveawayEndMonth = "September";
    break;
  case 9:
    giveawayEndMonth = "October";
    break;
  case 10:
    giveawayEndMonth = "November";
    break;
  case 11:
    giveawayEndMonth = "December";
    break;
  default:
    console.log("Something went wrong");
}

document.getElementById(
  "date"
).innerHTML = `${giveawayEndWeekday}, ${giveawayEndMonth} ${giveawayEndDate.getDate()}, ${giveawayEndDate.getFullYear()}`;

var days = document.getElementById("days");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

// set giveaway countdown

var timer = setInterval(function () {
  var now = new Date().getTime();
  var distance = giveawayEndDate - now;
  var daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hoursLeft = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);
  daysLeft < 10 ? (daysLeft = `0${daysLeft}`) : daysLeft;
  days.innerHTML = daysLeft;
  hoursLeft < 10 ? (hoursLeft = `0${hoursLeft}`) : hoursLeft;
  hours.innerHTML = hoursLeft;
  minutesLeft < 10 ? (minutesLeft = `0${minutesLeft}`) : minutesLeft;
  minutes.innerHTML = minutesLeft;
  secondsLeft < 10 ? (secondsLeft = `0${secondsLeft}`) : secondsLeft;
  seconds.innerHTML = secondsLeft;
  if (distance < 0) {
    clearInterval(timer);
    days.innerHTML = 0;
    hours.innerHTML = 0;
    minutes.innerHTML = 0;
    seconds.innerHTML = 0;
  }
}, 1000);
