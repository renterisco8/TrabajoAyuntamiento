<?php
/* CAPTURA LOS DATOS ENVIADOS DESDE LOS CAMPOS DE TEXTO */
$nif_ini = strtolower(trim(htmlspecialchars($_POST['nif_usu'])));
$clave_ini = strtolower(trim(htmlspecialchars($_POST['clave_usu'])));
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
$resultado1 = $mysqli->query("SELECT nif_usu, clave_usu FROM USUARIOS WHERE
nif_usu='$nif_ini' and clave_usu='$clave_ini'");
/* OBTENER EL NÚMERO DE REGISTROS AFECTADOS POR LA ÚLTIMA INSTRUCCIÓN */
$num_reg = $mysqli->affected_rows;
echo $num_reg;

/* SI LA CONSULTA NO DEVUELVE REGISTRO ALGUNO */
   if (empty($nif_ini) || empty($clave_ini)) {
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
$resultado1->free();
/* CIERRE DE LA CONEXIÓN */
$mysqli->close();