var board = document.getElementById('container');
var selector = document.getElementById('selector');
var divs = [];
var element = document.createElement("div");

var em = ["💐", "🌹", "🌻", "🏵️",
    "🌺", "🌴", "🌈", "🍓",
    "🍒", "🍎", "🍉", "🍊",
    "🥭", "🍍", "🍋", "🍏",
    "🍐", "🥝", "🍇", "🥥",
    "🍅", "🌶️", "🍄", "🧅",
    "🥦", "🥑", "🍔", "🍕",
    "🧁", "🎂", "🍬", "🍩",
    "🍫", "🎈"];

var casillas = 0;
var valor = 0;
var parejas = [];

// he pulsado un botón y he elegido las casillas con
//  las que jugar

selector.addEventListener('change', () => {
    casillas = selector.options[selector.selectedIndex].value;
    game();
}
)

function game() {
    valor = casillas / 2;

    // 
    for (let i = 1; i <= valor; i++) {
        parejas.push(i);
    }
    // parejas = [1,2,3,4,5,6]
    for (let i = 1; i <= valor; i++) {
        parejas.push(i);
    }
    // parejas = [1,2,3,4,5,6,1,2,3,4,5,6]

    // Reordenar el array aleatoriamente
    parejas = parejas.sort(function (a, b) {
        return 0.5 - Math.random()
    });

    console.log(parejas.toString())


    // divs = document.getElementsByClassName('number');
    for (let i = 0; i < casillas; i++) {
        board.appendChild(element);
        console.log('div insertado: ' + i)

    }

    // me retorna un array con los dvis hijos del tablero
    divs = board.childNodes;


    for (let i = 0; i < divs.length; i++) {
        divs[i].innerHTML = parejas[i];
        console.log('div relleno: ' + i)

    }
}