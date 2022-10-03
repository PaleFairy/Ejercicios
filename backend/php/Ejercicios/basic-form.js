//CONTROL PRINCIPAL
//los inputs no pueden estar vacíos input.value!='', value.length >0
//las contraseñas deben coincidir pass1.value == pass.value2

//CONTROL SECUNDARIO
//el email debe ser formato correcto (***@**.***)
//el usuario debe ser único
//la contraseña debe tener una longitud determinada
//la contarseña debe tener el formato indicado
    //mínimo 8 caracteres
    //al menos una mayúscula y un número
//guardar la contraseña CIFRADA en la BD

const button = document.getElementById("button");
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const error = document.getElementById("errortext");

//const ayuda = document.getElementById("ayuda");


nombre.addEventListener("keyup", function() {
   if(nombre.value==""){        
        error.innerHTML="Introduzca un usuario";
        button.disabled=true;  
   }else if (pass1.value!=""){    
        error.innerHTML="";
        enviar();
}       
})

email.addEventListener("keyup", function () {
    if(email.value=="" /*|| 
            email.pattern!="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"*/){        
        error.innerHTML="Introduzca un email válido";
        button.disabled=true; 
    }else if (pass1.value!=""){
        error.innerHTML="";
        enviar();    
} 
})

pass1.addEventListener("keyup", function () {
    if(pass1.value.length < 8){        
        error.innerHTML="Introduzca al menos 8 caracteres";
        button.disabled=true; 
    }else{
        error.innerHTML="";
    }
})

pass2.addEventListener("keyup", function () {
    if(pass1.value!=pass2.value){        
        error.innerHTML="Repita la misma contraseña";
        button.disabled=true; 
    }else{
        error.innerHTML="";
        enviar();
    }
})

/*function comprobar() {
    if(pass1.value!=''){        
        enviar();  
        error.innerHTML="";         
    } else{
        button.disabled=true;
    }
}*/
function enviar(){  
    if(nombre.value!=""){
        button.disabled=false;    
    } else{
        button.disabled=true;
    }
        
}





/*nombre.addEventListener("mouseleave", function(){
    textAyudaClean();
})
email.addEventListener("mouseleave", function(){
    textAyudaClean();
})
pass1.addEventListener("mouseleave", function(){
    textAyudaClean();
})
pass2.addEventListener("mouseleave", function(){
    textAyudaClean();
})*/

/*function textAyuda() {
    ayuda.innerHTML="Introduce un nombre de usuario";      
}
function textAyuda2() {
    ayuda.innerHTML="Introduce un email válido";  
}
function textAyuda3() {
    ayuda.innerHTML="Mínimo 8 caracteres";    
}
function textAyuda4() {
    ayuda.innerHTML="Repite la contraseña";    
}

function textAyudaClean() {
    ayuda.innerHTML="";
}*/




    
//ahora la solución de verdad;

/*const button = document.getElementById("button");
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const error = document.getElementById("errortext");

const inputs = document.getElementByClassName("inputField");
//Aquí seleccionamos todos los inputs y los metemos en un array
for(let i = 0, i <= inputs.length, ){
    inputs[i].addEventListener("keyup", function(){

    })
}

function controlErrors(){

//comprobación del email
const pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
let emailCorrecto: false;

if(email.value.pattern == pattern){
    emailCorrecto = true;
}

//comprobación de la contraseña (8 caracteres)
let passCorrecto = false;

if(pass.length >=8 && pass2.length >=8){
    if (pass.value == pass2.value){
        passCorrecto=true;
    }else console.log ("LAs contraseñas deben coincidir");
} else console.log("mínimo 8 caracteres");


//comprobación general

    for (let i = 0; i < inputs.length; i++) {
        if(inputs[i].value == ""){
            return false;
        }        
    }
}
*/