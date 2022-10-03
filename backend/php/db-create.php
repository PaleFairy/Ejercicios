<?php

//variables nombradas con $ + nombre variable
$servername = 'localhost';
$username = 'root';
$password = 'ainhoameatze';

//crear conexión
$conn = new mysqli ($servername, $username, $password);

//Comprobar conexión
if($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
echo 'Conectado con éxito';

//crear base de datos
$sql = 'CREATE DATABASE if not exists phpDB';
if($conn->query($sql) ===TRUE){
    echo 'Base de datos creada con éxito';
} else{
    echo 'Error al crear la base de datos' . $conn->error;
}
$conn->close();


?>