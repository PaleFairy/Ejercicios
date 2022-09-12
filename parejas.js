const imgArray = [
    '../resources/parejas/bowie.jpg', '../resources/parejas/Butler.webp',
    '../resources/parejas/Chewbacca.webp', '../resources/parejas/Chihiro.jpg',
    '../resources/parejas/escarlata.png', '../resources/parejas/grogu.jpg',
    '../resources/parejas/haku.jpg', '../resources/parejas/hansolo.webp',
    '../resources/parejas/laberinto.jpg', '../resources/parejas/mandalorian.jpg',
    '../resources/parejas/Neo.webp', '../resources/parejas/Trinity.webp',
    '../resources/parejas/dark1.webp', '../resources/parejas/dark2.jpg',
    '../resources/parejas/moto.jpg', '../resources/parejas/tetsuo.jpg',
    '../resources/parejas/alien.png', '../resources/parejas/ripley.jpg',
];
var order = [];
var selector = document.getElementById("selector");
var contenedor = document.getElementById('contenedor');
var startButton = document.getElementById("startButton");
var contador = document.getElementById('contador');
var txtcabecera=document.getElementById('textocabecera');

var pareja1 = "";
var pareja2 = "";
var puntos = 0;
txtcabecera.innerHTML="Selecciona dificultad";

//definimos un booleano para que permita (o no) hacer click 
//sobre cada elemento 
var clickable = true;

//cada vez que cambia el valor del option extrae el .value (string)
selector.addEventListener('change', () => {
    numero = selector.options[selector.selectedIndex].value;
    seleccion = parseInt(numero);
    StartGame();
}
)
//elegimos el número de casillas
function StartGame() {
    //al empezar el juego ocultamos el selector si el valor no es reset
    if(seleccion==0){
        txtcabecera.innerHTML="Selecciona dificultad";
        selector.disabled=false;
    }else{
        selector.disabled=true;
    }
    

    //vaciamos arrays y variables
    puntos = 0;
    order = [];
    contenedor.innerHTML = "";
    switch (seleccion) {
        case 12:
            contenedor.className = "gridcontainer1";
            Refill();
            break;
        case 24:
            contenedor.className = "gridcontainer2";
            Refill();
            break;
        case 36:
            contenedor.className = 'gridcontainer3';
            Refill();
            break;
        default:
            contenedor.className = 'gridcontainer0';
    }
}
function Refill() {
    txtcabecera.innerHTML=
        "Empareja las imágenes iguales <br> haciendo click sobre ellas.<br> ¡Suerte!"
    //como va por parejas se selecciona la mitad del array de img y se repite
    for (let i = 0; i < seleccion / 2; i++) {
        order.push(i);
        console.log("primer for");
    }
    for (let i = 0; i < seleccion / 2; i++) {
        order.push(i);
        console.log("segundo for");
    }
    // Reordenar el array aleatoriamente
    order = order.sort(function (a, b) {
        return 0.5 - Math.random()
    });
    console.log("random");

    /*creamos las imágenes y añadimos al HTML el contador 'e' en las ids para
    que funcionen como parámetro de la función visibility() identificando específicamente
    cada objeto*/
    for (let e = 0; e < order.length; e++) {
        imagen = "<div class='imagenes'><img id ='" + e + "' class='invisible' onclick='visibilidad(" + e + ")' src= '" +
            imgArray[order[e]] + "'></img></div>";
        contenedor.innerHTML += imagen;
    }
}

function visibilidad(id) {
    // aquí cambiamos directamente la opacidad como propiedad del objeto,
    // sin necesidad de usar el css y comprobamos que la imagen se puede clickar
    //(o sea, que no está ya emparejada)
    if (clickable) {
        elemento = document.getElementById(id);
        elemento.style.opacity = 1;

        //aquí comprobamos que el objeto guardado en pareja1 no sea él mismo o esté vacío
        //y lo rellenamos
        if (pareja1 == "" || pareja1 == elemento) {
            pareja1 = elemento;
        
        //si pareja1 ya tiene un valor, pasamos a rellenar pareja2 para hacer la comparativa
        } else {
            pareja2 = elemento;
            clickable = false;

            emparejar();
        }
    }
}

/*los parámetros en las funciones solucionan problemas como
que se sobreescriban las variables (en este caso 'elemento') y para meter
valores externos ---sarcasmo off---*/
// ocultamos las imágenes pasado cierto tiempo si no coinciden  
function invisibilidad(x) {
    setTimeout(() => {
        pareja1.style.opacity = 0;
        pareja2.style.opacity = 0;
        //vaciamos los valores de pareja1 y 2 y volvemos a permitir clicks
        pareja1 = "";
        pareja2 = "";
        clickable = true;
    }, 1000);
}

function emparejar() {
    /*como daba errores, es mejor usar los atributos directamente en vez de 
    almacenarlos en variables*/
    //comparamos los src para ver si son iguales y dejamos las parejas visibles
    if (pareja1.src == pareja2.src) {
        pareja1.style.opacity = 1;
        pareja2.style.opacity = 1;
        
        //sumamos los puntos
        puntos++;
        contador.innerHTML = 'Puntos: ' + puntos;

        //comprobamos el contador de puntos por si ha ganado
        if (puntos>=6 && contenedor.className=='gridcontainer1') {
            Ganar();
        }
        if (puntos>=12 && contenedor.className=='gridcontainer2') {
            Ganar();
        }
        if (puntos>=18 && contenedor.className=='gridcontainer3') {
            Ganar();
        }

        //desactivamos el onclick con setAttribute para que no se pueda volver
        //a clickar sobre las imágenes ya emparejadas
        pareja1.setAttribute('onclick', '');
        pareja2.setAttribute('onclick', '');
        //vaciamos las variables
        pareja1 = "";
        pareja2 = "";
        elemento = "";
        //devolvemos la posibilidad de clickar
        clickable = true;

    } else {
        invisibilidad(elemento);
    }
}
function Ganar() {
    txtcabecera.innerHTML="¡HAS GANADO!";
    selector.disabled=false;
    puntos=0;
    contador.innerHTML = 'Puntos: ' + puntos;    
}
function Rendicion() {
    location.reload();
}

