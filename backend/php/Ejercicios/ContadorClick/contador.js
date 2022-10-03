const psButton=document.getElementById("button");

var cuenta=0;
var texto=document.getElementById("texto");

var printSecs = document.getElementById('secs');
var printCents = document.getElementById('cents');
var btnStart = document.getElementById('start');
var form = document.getElementById("form");
var secs = 0;
var cents = 0;

var interval;


btnStart.addEventListener('click', function () {    
    clearInterval(interval);   
    interval = setInterval(start, 10)
}
);


psButton.addEventListener("click", function () {
    cuenta++;
    console.log(cuenta);
    texto.value=cuenta;
})

function start() {   
    cents++;
    if (cents < 10) {
        printCents.innerHTML = ":0" + cents;
    }
    if (cents >= 10) {
        printCents.innerHTML = ":" + cents;
    }
    if (cents > 99) {
        secs++;
        cents = 0;        
        printCents.innerHTML = ":" + cents;
    }
    
    if (secs < 10) {
        printSecs.innerHTML = '0' + secs;
    }
      
    comprobar(); 
}

function comprobar() {
    if(secs>=3){
        clearInterval(interval);
        printSecs.innerHTML=0;
        printCents.innerHTML=0;
        form.submit();
    }    
}

