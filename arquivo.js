const timeToStart = document.querySelector(".time-to-start")
const stopNow = document.querySelector(".stop-now")
const startNow = document.querySelector(".start-now")


let number = 0
let cron 
let h1 = 0


function start() {
    cron = setInterval(function(){
        number++
        timeToStart.innerHTML= number
    },1000)
}

function stop() {
    clearInterval(cron)
}

