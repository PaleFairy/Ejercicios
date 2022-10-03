<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulario de registro</title>
    <link rel="stylesheet" href="style-form.css">
    <style>
        #light span {
            opacity: 0;
        }
    </style>
</head>
<body>
    <div class="login-box">
    <h2>Formulario de registro</h2>
    <!-- <form method="GET" action="test-get.php"> -->
    <form method="POST" action="reg-user.php">
    <form method="POST" action="reg-user.php" autocomplete="off">
        <div class="user-box">
        <input type="text" name="user" required>
        <input class="inputField" id="user" type="text" name="user" required>
        <label for="user">Nombre de usuario:</label>
        </div>
        <div class="user-box">
        <input type="text" name="email" required>
        <input class="inputField" id="email" type="text" name="email" required>
        <label for="email">Correo electrónico:</label>
        </div>
        <div class="user-box">
        <input type="password" name="pass1" required>
        <input class="inputField" id="pass1" type="password" name="pass1" required>
        <label for="pass1">Contraseña:</label></div>
        <div class="user-box">
        <input type="password" name="pass2" required>
        <input class="inputField" id="pass2" type="password" name="pass2" required>
        <label for="pass2">Confirmar contraseña:</label></div>
        <div class="submit-box">
        <div>
            <span></span> 
            <span></span>
            <span></span>
            <span></span>
        <input type="submit" value="Enviar" disabled>
        <div id="light">
            <span class="spanLight"></span> 
            <span class="spanLight"></span>
            <span class="spanLight"></span>
            <span class="spanLight"></span>
        <input id="submit" type="submit" value="Enviar" disabled>
</div>
        </div>
    </form>
    </div>
</body>
<script src="control-form.js"></script>
</html>
