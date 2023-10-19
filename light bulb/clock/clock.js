let heading = document.getElementById('heading')
heading.innerHTML = 'Digital Clock';
heading.style.textAlign = 'center';
heading.style.paddingTop = '30px';
heading.style.fontSize = '70px';

var intervalId; 

function displayCurrentTime() {
  let today = new Date();
  let current_time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  document.getElementById("time").innerHTML = current_time;
}

function startClock() 
{
    if (!intervalId) {
      intervalId = setInterval(displayCurrentTime, 1000);
    }
}
  
function stopClock() 
{
    clearInterval(intervalId);
    intervalId = null; // Reset the interval ID
}

startClock();

let time = document.getElementById('time');
time.style.textAlign = 'center';
time.style.fontSize = '80px';
time.style.fontWeight = 'bold';
time.style.padding = '23px';

let today = new Date(); 
var todayDate = today.getDate() + "/" + (today.getMonth()+1) + "/" + today.getFullYear();

let date = document.getElementById("date");
date.innerHTML = todayDate;
date.style.textAlign = 'center';
date.style.fontSize = '42px';

let buttons = document.getElementsByClassName('buttons')
buttons.style.display = 'flex';
buttons.style.justifyContent = 'center';  
