<?php
        //Script para recibir datos de "index.php".

        //Capturamos los datos del formulario.
        $nombre_usuario=$_POST['nombre'];
        $email_usuario=$_POST['email'];
        $mensaje_usuario=$_POST['mensaje'];

        //Con 3 variables enviamos el formulario por $_POST[].
        $destino="info@janp-c.com";
        $asunto="Mensaje enviado desde el localhost.";

        $mensaje="Nombre: ".$nombre_usuario."\r\n";
        $mensaje="E-mail: ".$email_usuario."\r\n";
        $mensaje="Consulta: ".$mensaje_usuario."\r\n";

        $remitente="From: ejemplo@sitioweb.com";

        mail($destino, $asunto, $mensaje, $remitente);
        //Si el mensaje se envía correctamente, pone:
        header("Location:index.php?i=OK");
?>