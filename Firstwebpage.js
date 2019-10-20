//const year = new Date().getFullYear(); //returns current year
const choosenDate = new Date('January 1, 2020 00:00:00').getTime(); //returns millisecods from jan 1 1970 to Date(2020,1,1)
 
let countdown = setInterval(function() {
 
  const today = new Date().getTime();//returns milliseconds from jain 1 1970 till today
  const diff = choosenDate - today; //total milliseconds left
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
 
  document.getElementById("countdown").innerHTML =
    "<div class=\"days\"> \
  <div class=\"c-number\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"c-number\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"c-number\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"c-number\">" + seconds + "</div>seconds</div> \
</div>";
 
}, 1000);
