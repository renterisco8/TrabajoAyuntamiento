<?php require 'seguridad-global.php'; ?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Examen Enero accedido</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta http-equiv="cache-control" content="no-cache">
        <meta name="description" content="Sede Electrónica de Tabaiba">
        <meta name="author" content="Fondo Sur">
        <link rel="stylesheet" type="text/css" href="css/css.css">
        <link rel="stylesheet" type="text/css" href="css/css3.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
    </head>
    <script>
        function ver() {
            alert('OK');
                $("#secNoticias").fadeOut("slow");
                $("#secSede2").fadeIn("slow");
            });
        
    </script>
    
    <body onload="ver();">
        <?php include 'include/menu2.php'; ?>

        <div id="divContenido">
            <?php include 'include/noticias.php'; ?>
            <?php include 'include/contacto.php'; ?>
            <?php include 'include/conocenos.php'; ?>
            <?php include 'include/accesibilidad.php'; ?>
            <?php include 'include/sede2.php'; ?>
            <?php include 'include/FAQ.php'; ?>
        </div>
        <?php include 'include/footer.php'; ?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/funciones.js" type="text/javascript"></script>
        <script src="js/show.js" type="text/javascript"></script>
        <script src="js/validacion.js" type="text/javascript"></script>
    </body>
</html>