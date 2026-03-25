// import {format, formatDistance } from 'https://cdn.jsdelivr.net/npm/Date-fns@3.6.0/+esm';

const clock = document.querySelector('.clock');
const start = document.querySelector('.start-bttn');
const stop = document.querySelector('.stop-bttn');
const pause = document.querySelector('.pause-bttn');

const elapsedtime = ()=>{
    const startTime = Date.now();
    setInterval(()=>{
        const currentTime = Date.now();
        let elapsed = currentTime - startTime;

        const hour = Math.floor(elapsed / (1000 * 60 * 60));
        const min = Math.floor((elapsed / (1000 * 60)) % 60);
        const sec = Math.floor((elapsed / 1000) % 60);
        const MillSec = elapsed % 100;

        const format = (num, size) => String(num).padStart(size, '0');
        const html = `
        <span>${format(hour, 2)}</span> 
        <span>${format(min, 2)}</span> 
        <span>${format(sec, 2)}</span>
        <span>${format(MillSec, 2)}</span>
        `
        
        clock.innerHTML = html
    }, 50);
}

start.addEventListener('click', elapsedtime);