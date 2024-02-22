let start = document.querySelector("#Start")
let stop = document.querySelector("#Stop")
let reset = document.querySelector("#Reset")
let p = document.querySelector("p")
let number = 0
let stopwatch

function formattime() {
    var hours = Math.floor(number / 3600);
    var minutes = Math.floor((number % 3600) / 60);
    var seconds = number % 60;

    // Adiciona um zero à esquerda se o número for menor que 10
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    p.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function startfun() {
    stopwatch = setInterval(function() {
        number++;
        formattime();
    },1000);
}



    function stopfun() {
        clearInterval(stopwatch)
}


function resetfun(){
    number = 0
    formattime()
    clearInterval(stopwatch)
}



start.addEventListener("click", startfun)
stop.addEventListener("click", stopfun)
reset.addEventListener("click", resetfun)