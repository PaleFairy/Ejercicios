<?php

//Tomamos las variables superglobales, enviadas desde el formulario
$usuario = $_POST['user'];
$correo = $_POST['email'];
$pass = $_POST['pass1'];

echo "sus datos son: <br>Usuario: " . $usuario . "<br>" . 
    "Correo electrónico: " . $correo . "<br>" . 
    "Contraseña: " . $pass;

    //El método get envía la información por el link y queda visible,
    //lo cual no es seguro. No almacena los datos. 
    ?>