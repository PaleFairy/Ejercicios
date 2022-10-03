<?php
include 'conn.php';

//crear query de lectura de datos
$sql = 'SELECT usuario from users'; //es un objeto


//metemos el objeto en la variable resultado
$result = $conn->query($sql);
//si el resultado contiene más de una fila
/*if($result->num_rows >0){
    //imprimir datos de cada fila
    while($row = $result->fetch_assoc()){
        //fetxh_assoc es un método que transforma el objeto en
        //un array asociativo (cada índice contiene una fila de 
        //los resultados) y cada una de estas filas se almacena
        //en cada bucle de $row

        echo "id: " . $row['id'] . "Nombre: " . $row['firstname'] . 
            " " . $row['lastname'] . "<br>";
    }
} else {
    echo "No hay resultados que mostrar";
}*/

$conn->close();
?>