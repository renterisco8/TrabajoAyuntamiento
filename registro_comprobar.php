<?php
/* CAPTURA LOS DATOS ENVIADOS DESDE LOS CAMPOS DE TEXTO */
$nif_rec = strtolower(trim(htmlspecialchars($_POST['nif_usu'])));
$nombre_rec = strtolower(trim(htmlspecialchars($_POST['nombre_usu'])));
$ape1_rec = strtolower(trim(htmlspecialchars($_POST['ape1_usu'])));
$ape2_rec = strtolower(trim(htmlspecialchars($_POST['ape2_usu'])));
/* DEFINICION DE LAS VARIABLES CON LOS DATOS DE CONEXION */
$se = "localhost";
$us = "root";
$co = "";
$bd = "ayuntamiento";
/* PREPARACION DE LA CONEXION */
$mysqli = new mysqli($se, $us, $co, $bd);
/* ESTABLECIMIENTO DE LA CONEXION */
if ($mysqli->connect_errno) {
printf("Error en la conexion: %s\n", $mysqli->connect_error);
exit();
}
$mysqli->set_charset("utf8");
/* SELECCIÓN DE LOS DATOS BUSCADOS */
$resultadoRecu = $mysqli->query("SELECT nif_usu, nombre_usu, ape1_usu, ape2_usu FROM USUARIOS WHERE
nif_usu='$nif_rec' and nombre_usu='$nombre_rec' and ape1_usu='$ape1_rec' and ape2_usu='$ape2_rec'");
/* OBTENER EL NÚMERO DE REGISTROS AFECTADOS POR LA ÚLTIMA INSTRUCCIÓN */
$num_reg = $mysqli->affected_rows;
echo $num_reg;
/* SI LA CONSULTA NO DEVUELVE REGISTRO ALGUNO */
if (empty($nif_rec) || empty($nombre_rec) || empty($ape1_rec) || empty($ape2_rec)) {
   echo ') Debe rellenar los dos campos (';
}
else if ($num_reg === 0) {
   echo ') No se ha encontrado ningún usuario registrado (';
}
/* SI LA CONSULTA DEVUELVE REGISTROS */
else if ($num_reg > 0) {
   echo ') Usuario encontrado (';
}
echo $num_reg;
/* LIBERAR LA MATRIZ QUE ALBERGA EL CONJUNTO DE RESULTADOS */
$resultadoRecu->free();
/* CIERRE DE LA CONEXIÓN */
$mysqli->close();