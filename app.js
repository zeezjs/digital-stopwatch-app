const clock = document.querySelector('.clock');
const startBtn = document.querySelector('.start-bttn');
const pauseBtn = document.querySelector('.pause-bttn');
const stopBtn = document.querySelector('.stop-bttn');

//states
let startTime = 0; //time user clicked start
let elapsedTime = 0;//total time covered (meausered) since user clicked start
let interValid = null;//variable for our interval (loop)
let isRunning = false; //the state of the stopwatch

//functions
//format function
const format = (num, size) => String(num).padStart(size, '0');

//Display function
const updateClock = ()=>{
    const hours = Math.floor(elapsedTime/(1000*60*60));
    const mins = Math.floor(elapsedTime/(1000*60)%60);
    const secs = Math.floor(elapsedTime/(1000)%60);
    const milliSecs = elapsedTime % 1000;

    const html = `
        <span>${format(hours, 2)}</span>
        <span>${format(mins, 2)}</span>
        <span>${format(secs, 2)}</span>
        <span>${format(milliSecs, 3)}</span>
    `

    clock.innerHTML = html
};

//start
const start = ()=>{
    if(isRunning)        
    return;
        isRunning = true;
        startTime = Date.now();
        interValid = setInterval(()=>{
            elapsedTime = Date.now() - startTime;
           updateClock();
        }, 50)
    };

//pause function
const pause = ()=>{
    if(isRunning){
        clearInterval(interValid);
        isRunning = false;
    }
}

//stop function
const stop = ()=>{
    clearInterval(interValid);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    updateClock()
};

//Events
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);