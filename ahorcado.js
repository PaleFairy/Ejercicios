const words = [
    "potato", "mobile", "lego", "jacket", "apple", "cat", "throne",
    "street"
]
// El svg del ahorcado
const hangman = document.getElementsByClassName('hangman');
var head = document.getElementById('head');
var face = document.getElementById('face');
var rEyes = document.getElementById('rEyes');
var xEyes = document.getElementById('xEyes');
var armL = document.getElementById('armL');
var armR = document.getElementById('armR');
var legL = document.getElementById('legL');
var legR = document.getElementById('legR');
var door1 = document.getElementById('door1');
var door2 = document.getElementById('door2');
var rope = document.getElementById('rope');


var death = 0;

var dashes = document.getElementById("dashes");
var letra = document.getElementById("letters");
var prueba = document.getElementById("prueba");
var over = document.getElementById("gameOver");
var key = document.getElementById("key");
var startButton = document.getElementById("startButton");

var randomWord="";
var letter="";
var lives = hangman.length;
var fails = 0;
var hits= 0;
var guess = [];


//guardamos los botones en un array
const letters = document.getElementsByClassName("btnLetras");
key.hidden=true;


for (let i = 0; i < letters.length; i++) {    

    letters[i].addEventListener("click", function() {  
        //this (la tecla que activa el evento) 
        // console.log("Has pulsado la tecla " + this.innerHTML)          
        
        let counter = 0;
        letter = this.innerHTML
    // this (esta tecla que ha activado el evento) 
    // innerHTML contiene la letra que hemos escrito dentro del botón
    
    // console.log("Has pulsado la tecla " + letter)
    
    search();

    // El for recorre la palabra y busca coincidencias
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i].toLowerCase() == letter.toLowerCase()) {
            // toLowerCase nos asegura de que las letras coincidan
            // independientemente de las mayúsculas

            // Si hay coincidencias, aumenta el contador            
            counter++;
        } 
    }
    

    // Si el contador es mayor que 0, es que han habido coincidencias
    if (counter > 0) {
        // Verde, correcto
        this.style.backgroundColor = "green";
        
        if (hits == randomWord.length) {
            over.innerHTML="¡Has ganado! <br> Pulsa Start Game para jugar otra vez.";
            setTimeout(reload,5000);
        } 
    } else {
        // Rojo, incorrecto
        this.style.backgroundColor = "red";
        fails++; 
        lives--;  
        hangman[death].style.display = 'block';
        death++;
        prueba.innerHTML="Te quedan " + lives + " vidas";       
        if (fails > 6) {
            fall();
            over.innerHTML="Game Over <br> Pulsa Start e inténtalo de nuevo.";
            setTimeout(reload,5000);
        }
    }
    // En cualquier caso, la tecla pulsada se desactiva
    this.disabled = true;    
    })   
    
}

function startGame() {  
    
    key.hidden=false;
    dashes.innerHTML="";
    prueba.innerHTML="Te quedan " + lives + " vidas";    
    
    let randomIndex = Math.floor(Math.random() * words.length);
    //  (Math.random()*100)/12.5
    randomWord = words[randomIndex];
    randomWord= randomWord.toUpperCase();
    // for (let i = 0; i < randomWord.length; i++) {
    //     prueba.innerHTML+= " " + randomWord[i];        
    // }
    for (let i = 0; i < randomWord.length; i++) {
        dashes.innerHTML+= " " + "_" ;        
    } 
    startButton.innerHTML="<button class='start' onclick='reload()'>Clear</button>"
}

function search() {
    
    let counter =0;
    for (let i = 0; i < randomWord.length; i++) {
        if (randomWord[i] == letter) {
            guess[i]=letter;  
            hits++;
        } 
        else {
            // Si la posición del array de aciertos está vacía la 
            // rellena con un guión
            if (!guess[i]) {
                guess[i] = '_';                          
            }   
        }                   
    }
    // Se imprime el array de aciertos como un string separado por espacios
    dashes.innerHTML = guess.join(' ');
}

function reload() {
    
    location.reload();
    //la función reload() recarga la página
    
}

function fall() {
    face.classList.add('dead');

    setTimeout(() => {
        rEyes.style.visibility = 'hidden';
        xEyes.style.visibility = 'visible';

        armL.setAttributeNS(null, "y2", 150)
        armL.setAttributeNS(null, "x2", 185)
        armR.setAttributeNS(null, "y2", 150)
        armR.setAttributeNS(null, "x2", 215)

        legL.setAttributeNS(null, "y2", 205)
        legL.setAttributeNS(null, "x2", 195)
        legR.setAttributeNS(null, "y2", 205)
        legR.setAttributeNS(null, "x2", 205)
    }, 2500);
}


//esta función no la he usado pero viene bien saber que...
function winner() {

    // Con el timeout le damos tiempo a que la 
    // última letra se imprima en pantalla
    // confirm crea un popup para confirmación aceptar/cancelar
    // y location hace referencia al mismo documento en el que se encuentra
    setTimeout(() => {
        if (confirm("Has ganado! ¿Otra partida?")) {
            location.reload();
        }
    }, 100);
}



