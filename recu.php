<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
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
                <?php include 'include/menu4.php'; ?>
            </section>
        </header>
        <div id="divContenido" class="blanco">
            <h2>Bienvenid@ a la sección de recuperación de contraseñas.</h2>
            <div class="gris">
                <div id="recu1" class="blanco">
                    <h3>Sólo tendrá que rellenar los siguientes campos para poder cambiar la contraseña.<br>
                    Recuerde utilizar mayúculas.</h3>
                    <p><label for="nif">NIF: </label><input type="text" name="nif_usu" id="nif_rec" value="12345678A">
                    <p><label for="nombre">Nombre propio: </label><input type="text" name="nombre_usu" id="nombre_rec" value="Ana"/>
                    <p><label for="ape1">Primer apellido: </label><input type="text" name="ape1_usu" id="ape1_rec" value="Moca"/>
                    <p><label for="ape2">Segundo apellido: </label><input type="text" name="ape2_usu" id="ape2_rec" value="Lin"/>
                    <p>
                    <input type="button" id="btnR" class="aceptar_rec boton" value="ACEPTAR">
                    <!--btn1-->
                    <!--aceptar_ini boton-->
                    <div id="resultadoRecu"></div>
                    <!--resultado1-->
                </div>
                <div id="recu2" class="blanco">
                    <h3>A continuación, escriba la nueva contraseña.<br>Recuerde utilizar mayúsculas.</h3>
                    <p><label for="nif">NIF: </label><input type="text" name="nif_usu" id="nif_rec2" value="12345678A" disabled/>
                    <p><label for="clave">Nueva clave de acceso: </label><input type="password" name="clave_usu" id="clave_rec"/><p>
                    <p><label for="clave2">Repita la nueva clave de acceso: </label><input type="password" name="clave_usu" id="clave_rec2"/><p>
                    <p>
                    <input type="button" id="btnR2" class="modificar_rec boton" value="MODIFICAR">
                    <div id="resultadoRecu2"></div>
                </div>
            </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="js/funciones.js" type="text/javascript"></script>
        <script src="js/show.js" type="text/javascript"></script>
    </body>
</html>