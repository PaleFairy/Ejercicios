<?php
    //variables nombradas con $ + nombre variable
    $servername = 'localhost';
    $username = 'root';
    $password = 'ainhoameatze';

    /*crear conexión (usamos mysqli que está predefinido con sus 
    correspondientes parámetros que hemos metido en variables)*/
    $conn = new mysqli ($servername, $username, $password);

    //Comprobar conexión
    if($conn->connect_error){
        die("Connection failed: " . $conn->connect_error);
    }
    echo 'Conectado con éxito <br>';
    
    //seleccionar la base de datos
    $sqlDB = 'USE text';

    if($conn->query($sqlDB)===TRUE){
        echo 'Base de datos text seleccionada <br>';
    } else {
        echo 'Error al seleccionar la DB <br>'. $conn->error;
    }

    // cerrar conexion
    //$conn->close();

?>