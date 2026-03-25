const clock = document.querySelector('.clock');
const startBtn = document.querySelector('.start-bttn');
const pauseBtn = document.querySelector('.pause-bttn');
const stopBtn = document.querySelector('.stop-bttn');

//states
let elapsedtime = 0;
let startTime = 0;
let isRunning = false;
let intervalid = null;

//functions

const update = ()=>{
        const hour = Math.floor(elapsedtime / (1000 * 60 * 60));
        const min = Math.floor((elapsedtime / (1000 * 60)) % 60);
        const sec = Math.floor((elapsedtime / 1000) % 60);
        const MillSec = elapsedtime % 1000;

        const format = (num, size) => String(num).padStart(size, '0');
        const html = `
        <span>${format(hour, 2)}</span> 
        <span>${format(min, 2)}</span> 
        <span>${format(sec, 2)}</span>
        <span>${format(MillSec, 2)}</span>
        `
        clock.innerHTML = html
    }//update display function

//start
const start = ()=>{
    startTime = Date.now()
    intervalid = setInterval(()=>{
        elapsedtime = Date.now() - startTime
        update();
    }, 50)
}

startBtn.addEventListener('click', start);

