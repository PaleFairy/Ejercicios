<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de registro</title>
    <link rel="stylesheet" href="basic-form.css">
</head>
<body>
    <div id="content">
    <h1>Formulario de registro</h1>
        

    <!-- <form method="GET" action="test-get.php"> -->
    <form method="POST" action="reg-user.php">
        <label for="user">Nombre de usuario:</label>
        <input id = "name" type="text" name="user" class="box" 
            onmouseover="textAyuda()" required><br>

        <label for="email">Correo electrónico:</label>
        <input id = "email" type="text" name="email" class="box" 
            onmouseover="textAyuda2()" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" 
            required><br>

        <label for="pass1">Contraseña:</label>
        <input id = "pass1" type="text" name="pass1" class="box" 
            onmouseover="textAyuda3()" required><br>

        <label for="pass2">Contraseña:</label>
        <input id = "pass2" type="text" name="pass2" class="box" 
            onmouseover="textAyuda4()" required><br>

        <input id="button" type="submit" value="Enviar" disabled><br>

        <p id="errortext"></p>
    </form>
    <div>
        <h1 id="ayuda"></h1>
    </div>
    </div>
</body>
<script src="basic-form.js"></script>
</html>