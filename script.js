const newYears  = '3 June 2024';

const targetEl = document.querySelector('h1');
const targetEvent = "Fourth Semester";
targetEl.innerHTML=targetEvent;

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');


function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = Math.floor((newYearDate-currentDate)/1000);
    const minute = Math.floor(totalSeconds/60)%60;
    const hours = Math.floor(totalSeconds/3600)%24;
    const days = Math.floor(totalSeconds/3600/24);
    const seconds = totalSeconds % 60 ;

    console.log(days,hours,minute,seconds);

    daysEl.innerHTML = timeFormat(days);
    hoursEl.innerHTML = timeFormat(hours);
    minuteEl.innerHTML = timeFormat(minute);
    secondEl.innerHTML = timeFormat(seconds);
}
function timeFormat(time){
    if(time<10){
        return `0${time}`;
    }else{
        return time;
    }
}

//initial call
countdown();

setInterval(countdown,1000);