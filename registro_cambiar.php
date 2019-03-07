<?php
/* CAPTURA LOS DATOS ENVIADOS DESDE LOS CAMPOS DE TEXTO */
$clave_usu1=$_POST['clave_usu1'];
$nif_usu=$_POST['nif_usu'];

/* DEFINICIÓN DE LAS VARIABLES CON LOS DATOS DE CONEXIÓN */
    $se = "localhost";
    $us = "root";
    $co = "";
    $bd = "ayuntamiento";

/* PREPARACIÓN DE LA CONEXIÓN */
$mysqli = new mysqli($se, $us, $co, $bd);

/* ESTABLECIMIENTO DE LA CONEXIÓN */
if ($mysqli->connect_errno) {
    printf("Error en la conexion: %s\n", $mysqli->connect_error);
    exit();
}
/* INSERCIÓN DE LOS DATOS - TODOS LOS VALORES ENTRE COMILLAS SIMPLES AUNQUE SEAN NUMÉRICOS */
if ($mysqli->query("UPDATE USUARIOS SET clave_usu='$clave_usu1' WHERE nif_usu='$nif_usu'") === TRUE) {
    printf("Datos insertados correctamente");
}
else {
    printf("Los datos no han sido insertados");
}

/* CIERRE DE LA CONEXIÓN */
$mysqli->close();
?>