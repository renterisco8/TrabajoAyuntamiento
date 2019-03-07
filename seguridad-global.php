<?php
    /* INICIO DE LA SESIÓN SI NO ESTÁ INICIADA */
    if (session_status()==PHP_SESSION_NONE) {
    	session_start();
    }
        /* COMPROBACIÓN DE QUE EL USUARIO ESTÁ AUTENTIFICADO */
        
    if ($_SESSION["autentificado"] != "si") {
        /* SI EL USUARIO NO ESTÁ AUTENTICADO SE LE REDIRIGE A index.php */
        
        header("Location: index.php");
        /* Y SE SALE DEL SCRIPT */
        exit();
    }
?>