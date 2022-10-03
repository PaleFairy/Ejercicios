<?php

    //coger los datos del formulario
    $user = $_POST['user'];
    $email = $_POST['email'];
    $pass= $_POST['pass1'];
    //conexión a la BD con la llamada include
    include 'conn.php';

    //crear query con la que metemos los datos en la tabla users

    /*$sql = "INSERT INTO users (usuario, email, password) VALUES ("
    . $user . ", " . $email . ", " . $pass . ");";*/

    $sql = "INSERT INTO users (usuario, email, password) VALUES (
    '$user', '$email', '$pass');"; // esto es el código mysql

    if($conn->query($sql)=== TRUE){ //esto es la orden PHP, sin ella
        //no metemos el código mysql en el server
    echo 'Datos introducidos correctamente';
    } else {
    echo 'Ha habido un error al introducir los datos' .$conn->error;
    }

?>