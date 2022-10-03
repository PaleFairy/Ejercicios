<?php

//ambas lineas ejecutan el código del archivo mencionado
include 'db-connect.php';
//include si falla da un aviso
//require 'db-connect.php';
// require si algo falla detiene la ejecución de todo el código (incluso el HTML siguiente)

//script sql para crear la tabla
// sql to create table
$sql = "CREATE TABLE MyGuests (    
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50),    
    reg_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )";
    //unsigned = no puede tener valor negativo
    //timestamp guarda el tiempo exacto en el que se hizo el cambio

    if($conn->query($sql)===TRUE){
        echo 'Tabala ejecutada con exito';
    } else{
        echo 'Ha habido un error al crear la tabla' . $conn->error;
    }
        
    $conn->close();  
        
    ?>