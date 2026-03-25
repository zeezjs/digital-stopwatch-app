// import {format, formatDistance } from 'https://cdn.jsdelivr.net/npm/date-fns@3.6.0/+esm';

const clock = document.querySelector('.clock');

timer = ()=>{
    const now = new Date();
    const hours = now.getHours();
    const mins = now.getMinutes();
    const sec = now.getSeconds();
    const Msec = now.getMilliseconds();

    const html = `
        <span>${hours}:</span> 
        <span>${mins}:</span> 
        <span>${sec}:</span>
        <span>${Msec}:</span> 
    `;

    clock.innerHTML = html
}

setInterval(timer, 1000)

