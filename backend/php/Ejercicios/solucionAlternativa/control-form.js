// CONTROL PRINCIPAL
// los inputs no pueden estar vacíos
    // input.value != ''
    // value.length > 0

    var user = document.getElementById('user');    
    var email = document.getElementById('email');    
    var pass1 = document.getElementById('pass1');    
    var pass2 = document.getElementById('pass2');    
    var submit = document.getElementById('submit');
    
    var light = document.getElementById('light'); 
    const lightSpans = document.getElementsByClassName('spanLight');
    
    const inputs = document.getElementsByClassName('inputField');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', controlErrors);
    }
    
    
    function controlErrors () {
        // Comprobación del email
        var pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let emailCorrecto = false;
    
        if (email.value.match(pattern)) {
            emailCorrecto = true;
        }
    
        // Comprobación de la contraseña
        let passCorrecto = false;
    
            // La contraseña debe de tener una longitud mínima de 8 caracteres
        if (pass1.value.length >= 8) {
            // Las contraseñas coinciden
            if (pass1.value == pass2.value) {
                passCorrecto = true;
            } else console.log('las contraseñas deben coincidir');
        } else console.log('la contraseña debe de tener 8 caracteres mínimo ' + pass1.value.length);
    
    
        // Comprobación general
        let inputRelleno = false;
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == '' || inputs.length == 0) {
                console.log('No puedes dejar campos vacíos');
                inputRelleno = false;
            } else inputRelleno = true;
        }
    
        console.log(emailCorrecto + ' ' + passCorrecto + ' ' + inputRelleno)
        if (emailCorrecto && passCorrecto && inputRelleno) {
            lightButton(true);
        } else lightButton(false);
    }
    
    function lightButton (x) {
        if (x) {
            // Efectos visuales
            light.classList.add('light');
            for (let i = 0; i < lightSpans.length; i++) {
                lightSpans[i].style.opacity = '1';
            }
             
            // Botón enviar
            submit.disabled = false;
        } else {
            light.classList.remove('light');
            for (let i = 0; i < lightSpans.length; i++) {
                lightSpans[i].style.opacity = '0';
            }
            submit.disabled = true;
        }
    }
    
    // las contraseñas deben de coincidir
        // pass1.value == pass2.value
    
    
        
    // CONTROL SECUNDARIO
    // el email debe ser de un formato correcto (***@***.***)
    // el usuario/correo debe de ser único
    // la contraseña debe de tener una longitud determinada
    // la contraseña debe de tener un formato que le indiquemos
        // longitud mínima de 8 caracteres
        // debe contener, al menos, una mayúscula y un número
    // GUARDAR LA CONTRASEÑA CIFRADA EN LA BD    