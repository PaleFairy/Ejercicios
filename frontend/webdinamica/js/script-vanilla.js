//Botón que abra un formulario modal

const btnLogin =document.getElementById('btnLogin');
const modalForm = document.getElementById('loginForm');

const drop = document.getElementById("dropDown");
const hover = document.getElementById("hover");
const modal2 = document.getElementById("modal2");

const primary=document.getElementById("primary");

btnLogin.addEventListener("click", ()=>{
    modalForm.style.display="block";
})

//Botón que cierre el modal
const btnClose=document.getElementById("btnClose");

btnClose.addEventListener("click", ()=>{
    modalForm.style.display="none";
})



//al hacer click fuera del modal, este se cierra

window.onclick = function (event) {
    if (event.target == modalForm) {
        modalForm.style.display="none";
    }
}

//////////////////banner carrusel

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

//Automatizar banner


    // array con contenedores de las Imagenes
    const carrete = document.getElementsByClassName("carousel-img");
    let slideIndex = -1;

function showSlides() {    

    //limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display="none";    
        // carrete[i].classList.remove("fade");    
    }
    //mostrar la siguiente img
    slideIndex++;
    
    if(slideIndex>=carrete.length){
        //si el contador supera la longitud del carrete se reinicia
        slideIndex=0;        
    }
    carrete[slideIndex].style.display="block";
    // carrete[slideIndex].classList.add("fade");
    //aumentamos el contador del indice de carrete
    
    //le damos un timeout para que se repita
    setTimeout(showSlides, 4000);
}
//iniciamos la función
showSlides();



  ///////////////////////SOLUCION////////////////////////////
  
function moveSlides(x) {    

    //limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display="none";            
    }

    slideIndex += x;
    //mostrar la siguiente img    
    
    if(slideIndex>=carrete.length){
        //si el contador supera la longitud del carrete se reinicia
        slideIndex=0;        
    } else if (slideIndex<0){
        slideIndex = carrete.length-1;
    }
    carrete[slideIndex].style.display="block";        
    //console.log(slideIndex);
}

carrete[0].style.display="block";

function moveDots(y){
    //limpiamos el carrete
    for (let i = 0; i < carrete.length; i++) {
        carrete[i].style.display="none";            
    }
    
    slideIndex=y;
    carrete[slideIndex].style.display="block";   
}

//------------------galería de imágenes-----------------------

function showGallery(img) {
    //Contenedor de la img grande
    let expImg = document.getElementById("expImg");
    
    //copiamos el src de la imagen clickada y se la asignamos a la grande
    expImg.src = img.src;

    //le damos display al contenedor padre de la img grande
    expImg.parentElement.style.display = "block";

}
    
    

    