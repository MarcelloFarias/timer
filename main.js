let hours = 0;
let minutes = 0;
let seconds = 0;
let count;
let timerDisplay = document.querySelector('.timer-field');
const btnStart = document.querySelector('.btn-start');
const btnPause = document.querySelector('.btn-pause');
const btnStop = document.querySelector('.btn-stop');

function startTimer() {
    count = setInterval(timer, 1000);
}

function pauseTimer() {
    clearInterval(count);
}

function stopTimer() {
    clearInterval(count);
    hours, minutes, seconds = 0;
    timerDisplay.innerText = '00 : 00 : 00';
}

function timer() {
    seconds++;

    if (seconds > 59) {
        seconds = 0;
        minutes++;

        if (minutes > 59) {
            minutes = 0;
            hours++;
        }
    }

    let formatTimer = `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;

    timerDisplay.innerText = formatTimer;
}

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', pauseTimer);
btnStop.addEventListener('click', stopTimer);