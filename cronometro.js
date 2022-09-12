var printSecs = document.getElementById('txtSec');
var printCents = document.getElementById('txtCents');
var printMins = document.getElementById('txtMins');
var btnStart = document.getElementById('btnStart');
var btnStop = document.getElementById('btnStop');
var btnReset = document.getElementById('btnReset');

var secs = 0;
var cents = 0;
var mins = 0;

// Guardamos el intervalo en una variable para poder modificarla
var interval;

// Evento que escucha el click al botón
btnStart.addEventListener('click', function () {
    // Se reinicia el intervalo
    clearInterval(interval);

    // Se inicia el intervalo que se repetirá cada 10ms (1 centésima)
    interval = setInterval(start, 10)
}
);

// Esta función se va a ejecutar una vez cada centésima
function start() {
    // Cada centésima de segundo aumenta el contador de centésimas
    cents++;

    if (cents < 10) {
        printCents.innerHTML = '0' + cents;
    }
    if (cents >= 10) {
        printCents.innerHTML = cents;
    }
    if (cents > 99) {
        // Cuando las centécimas llegan a 100 sube un segundo
        // y las centécimas se reinician
        secs++;
        cents = 0;

        // Se imprime el resultado
        printCents.innerHTML = cents;
    }

    // Condiciones de segundos
    if (secs < 10) {
        printSecs.innerHTML = '0' + secs;
    }
    if (secs >= 10) {
        printSecs.innerHTML = secs;
    }
    if (secs > 59) {
        mins++;
        secs = 0;

        printSecs.innerHTML = secs;
    }

    // Condiciones de minutos
    if (mins < 10) {
        printMins.innerHTML ='0' + mins;
    }
    if (mins >= 10) {
        printMins.innerHTML = mins;
    }

}

btnStop.addEventListener("click", stop);

function stop() {
    clearInterval(interval);
}

btnReset.addEventListener("click", reset);

function reset() {
    secs = 0;
    cents = 0;
    mins=0;
    printSecs.innerHTML = secs;
    printCents.innerHTML = cents;
    printMins.innerHTML = mins;
}