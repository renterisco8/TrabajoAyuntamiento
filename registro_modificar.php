<?php
/* CAPTURA LOS DATOS ENVIADOS DESDE LOS CAMPOS DE TEXTO */
$correo_usu=$_POST['correo_usu'];
$clave_usu=$_POST['clave_usu'];
$fechalta_usu=$_POST['fechalta_usu'];
$nif_usu=$_POST['nif_usu'];
$nombre_usu=$_POST['nombre_usu'];
$ape1_usu=$_POST['ape1_usu'];
$ape2_usu=$_POST['ape2_usu'];
$fechnac_usu=$_POST['fechnac_usu'];
$lugar_usu=$_POST['lugar_usu'];
$calle_usu=$_POST['calle_usu'];
$numero_usu=$_POST['numero_usu'];
$piso_usu=$_POST['piso_usu'];
$letra_usu=$_POST['letra_usu'];
$ciudad_usu=$_POST['ciudad_usu'];
$codpost_usu=$_POST['codpost_usu'];
$pais_usu=$_POST['pais_usu'];
$delito_usu=$_POST['delito_usu'];
$estado_usu=$_POST['estado_usu'];

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
if ($mysqli->query("UPDATE USUARIOS SET correo_usu='$correo_usu' , clave_usu='$clave_usu' , lugar_usu='$lugar_usu' , 
calle_usu='$calle_usu' , numero_usu='$numero_usu' , piso_usu='$piso_usu' , letra_usu='$letra_usu' , 
ciudad_usu='$ciudad_usu' , codpost_usu='$codpost_usu' , pais_usu='$pais_usu'
WHERE nif_usu='$nif_usu'") === TRUE) {
    printf("Datos insertados correctamente");
}
else {
    printf("Los datos no han sido insertados");
}

/* CIERRE DE LA CONEXIÓN */
$mysqli->close();
?>