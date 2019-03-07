<?php
/* INICIO DE SESIÓN, AUNQUE YA ESTÉ INICIADA, PARA
* DESTRUIRLA AL CERRAR LA SESIÓN DESDE acceso-aceptado.php
*/
if (session_status() == PHP_SESSION_NONE) {session_start();}
/* DESTRUCCIÓN DE LA SESIÓN */
session_destroy();
?>

<!DOCTYPE html>
<html>
        <head>
                <meta charset="UTF-8">
                <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                <title>Examen Enero</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <meta http-equiv="cache-control" content="no-cache">
                <meta name="description" content="Sede Electrónica de Tabaiba">
                <meta name="author" content="Fondo Sur">
                <link rel="stylesheet" type="text/css" href="css/css.css">
                <link rel="stylesheet" type="text/css" href="css/menu.css">
                <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

        </head>
        <body>
                <header>
                        <section id="menu">
                        <?php include 'include/menu.php'; ?>
                        </section>
                </header>

                <div id="divContenido">
                        <?php include 'include/noticias.php'; ?>
                        <?php include 'include/contacto.php'; ?>
                        <?php include 'include/conocenos.php'; ?>
                        <?php include 'include/accesibilidad.php'; ?>
                        <?php include 'include/FAQ.php'; ?>
                </div>
                
                

                <?php include 'include/footer.php'; ?>
                

                
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="js/funciones.js" type="text/javascript"></script>
                <script src="js/show.js" type="text/javascript"></script>
                
        </body>
</html>