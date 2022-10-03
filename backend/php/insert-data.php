<?php
include 'db-connect.php';

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";

//insertar múltiples datos en una soloa query
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";

//ejecutar la función  multiquery
if($conn->multi_query($sql)=== TRUE){
    echo 'Datos introducidos correctamente';
} else {
    echo 'Ha habido un error al introducir los datos' .$conn->error;
}

$conn->close();

?>