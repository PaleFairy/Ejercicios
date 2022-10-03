<?php

//Tomamos las variables superglobales, enviadas desde el formulario
$usuario = $_GET['user'];
$correo = $_GET['email'];
$pass = $_GET['pass1'];

echo "sus datos son: <br>Usuario: " . $usuario . "<br>" . 
    "Correo electrónico: " . $correo . "<br>" . 
    "Contraseña: " . $pass;

    //El método get envía la información por el link y queda visible,
    //lo cual no es seguro. No almacena los datos. 
    ?>