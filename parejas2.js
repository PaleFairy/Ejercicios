var board = document.getElementById('container');
var selector = document.getElementById('selector');
var divs = [];
var element = document.createElement("div");

var em = ["๐", "๐น", "๐ป", "๐ต๏ธ",
    "๐บ", "๐ด", "๐", "๐",
    "๐", "๐", "๐", "๐",
    "๐ฅญ", "๐", "๐", "๐",
    "๐", "๐ฅ", "๐", "๐ฅฅ",
    "๐", "๐ถ๏ธ", "๐", "๐ง",
    "๐ฅฆ", "๐ฅ", "๐", "๐",
    "๐ง", "๐", "๐ฌ", "๐ฉ",
    "๐ซ", "๐"];

var casillas = 0;
var valor = 0;
var parejas = [];

// he pulsado un botรณn y he elegido las casillas con
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