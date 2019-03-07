<?php
/*Inicio de la sesión */
    if (session_status()==PHP_SESSION_NONE) {session_start();}
        $nif_rec = $_POST["nif_rec"];
        $nombre_usu = $_POST["nombre_usu"];
        $ape1_usu = $_POST["ape1_usu"];
        $ape2_usu = $_POST["ape2_usu"];

        require_once ('con1.php');
        
        $mysqli->set_charset("utf8");
        /* PROTECCIÓN FRENTE A SQL INYECTADO (FUNCIÓN mysql_real_escape_string) */
        /*$nif_rec = $mysqli->real_escape_string($nif_rec);*/
        $nombre_usu = $mysqli->real_escape_string($nombre_usu);
        $ape1_usu = $mysqli->real_escape_string($ape1_usu);
        $ape2_usu = $mysqli->real_escape_string($ape2_usu);

    if ($resultadoRecu = $mysqli->query("SELECT nif_usu, nombre_usu, ape1_usu, ape2_usu FROM usuarios 
        WHERE nif_usu='$nif_rec' and nombre_usu='$nombre_usu' and ape1_usu='$ape1_usu' and ape2_usu='$ape2_usu'")) {
        /* DETERMINA EL NÚMERO DE REGISTROS QUE DEVUELVE LA CONSULTA */
        $numeroRegistros = $resultadoRecu->num_rows;
        /* LIBERA LA MATRIZ QUE ALBERGA EL CONJUNTO DE RESULTADOS */
        $resultadoRecu->free();
        /* CIERRA LA CONEXIÓN */
        $mysqli->close();
        /*$arr1 = new Clase1();*/

        if ($numeroRegistros) {
            
            /*$arr1->v1 = 1;
            $arr1->v2 = $nif_rec;
            echo json_encode($arr1);*/
            echo 1;
        

        /* SE DEVUELVE 1 A $.ajax (done) EN funciones.js
        * INDICANDO QUE EL ACCESO HA SIDO ACEPTADO
        */
        
    } else {

        echo 0;
        }
    }
?>