<?php
	/* Script para capturar datos del formulario de index.php */
	//Datos a capturar por método $_POST.
	$nombreUsuario = $_POST['name'];
	$correoUsuario = $_POST['email'];
	$asuntoUsuario = $_POST['menssage'];
	//E-mail de destino.
	$destino = "j.andres915@gmail.com";
	//Asunto del mensaje.
	$asuntoMensaje = "Mensaje enviado desde GitHub Pages | GitLab Pages.";
	//Datos a recibir en el mensaje.
	$mensaje='Nombre: '.$nombreUsuario.'\r\n';
	$mensaje.='E-mail: '.$correoUsuario.'\r\n';
	$mensaje.='Asunto: '.$asuntoUsuario.'\r\n';
	//Remitente.
	$remitente = "From: GitHub Pages | GitLab Pages user@website.com";
	//Los valores que llega al E-Mail de destino.
	mail($destino, $asuntoMensaje, $mensaje, $remitente);
	//Si el formulario se envió correctamente en el index.php le agrega un '?i=OK#contact'; esto es una redirección.
	header("Location:index.php?i=OK#contact");
?>