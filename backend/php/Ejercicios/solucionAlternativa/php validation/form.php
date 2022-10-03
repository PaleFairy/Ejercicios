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

        .user-box span {
            color: white;
        }
    </style>
</head>

<body>
    <?php
    // Declaramos las variables como strings vacíos
    $errorUser = $errorEmail = $errorPass = '';
    $user = $email = $pass1 = $pass2 = '';

    // Si se ha cargado la página mediante un POST (método del formulario)
    // Es decir, se ha enviado (submitted) un formulario y se ha cargado esta página
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {

        // Comprobar que las variables no están vacías
        if (empty($_POST['user'])) {
            $errorUser = 'Debe rellenar este campo';
        } else {
            $user = clean_input($_POST['user']);
        }

        // Comprobar que el usuario sólo contiene números y espacios
        if (!preg_match("/^[a-zA-Z- ']*$/", $user)) {
            // preg_match es un método con dos parámetros
            // el primero es el patrón que queremos comprobar
            // el segundo es la variable a comprobar

            $errorUser = 'El usuario debe contener sólamente letras y espacios';
        }

        // Comprobar el email
        if (empty($_POST['email'])) {
            $errorEmail = 'Debe rellenar este campo';
        } else {
            $email = clean_input($_POST['email']);
        }
        // Comprobamos el formato del email
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $errorEmail = 'Formato de correo electrónico inválido';
        }
    }
    function clean_input($data)
    {
        $data = trim($data);//para eliminar espacios
        $data = stripslashes($data);//elimina barras
        $data = htmlspecialchars($data);//elimina...
        return $data;
    }

    ?>


    <div class="login-box">
        <h2>Formulario de registro</h2>

        <!-- <form method="GET" action="test-get.php"> -->
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" autocomplete="off">
            <div class="user-box">
                <input class="inputField" id="user" type="text" name="user" required>
                <label for="user">Nombre de usuario:</label>
                <span><?php echo $errorUser; ?></span>
            </div>

            <div class="user-box">
                <input class="inputField" id="email" type="text" name="email" required>
                <label for="email">Correo electrónico:</label>
                <span><?php echo $errorEmail; ?></span>
            </div>

            <div class="user-box">
                <input class="inputField" id="pass1" type="password" name="pass1" required>
                <label for="pass1">Contraseña:</label>
            </div>
            <div class="user-box">
                <input class="inputField" id="pass2" type="password" name="pass2" required>
                <label for="pass2">Confirmar contraseña:</label>
            </div>

            <div class="submit-box">
                <div id="light">
                    <span class="spanLight"></span>
                    <span class="spanLight"></span>
                    <span class="spanLight"></span>
                    <span class="spanLight"></span>
                    <input id="submit" type="submit" value="Enviar">
                </div>
            </div>
        </form>
    </div>
</body>

</html>