<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contador de Clicks</title>
    <link rel="stylesheet" href="contador.css">
</head>
<body>
    <h2>Contador de Clicks</h2>
    <div>
        <button id="start">Empezar</button>
        <h3>Tiempo:</h3><br>
        <div id="tiempo">            
            <div id="secs" class="tpo"></div>
            <div id="cents" class="tpo"></div>
        </div>
    </div>
    <form id="form" method="POST" action="contador_records.php">
    <input id="texto" type="text" value=""><br>    
    </form>
    <button id="button">Click!</button>
</body>

<script src="contador.js"></script>

</html>