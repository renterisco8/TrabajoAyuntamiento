<?php
/*Inicio de la sesión */
    if (session_status()==PHP_SESSION_NONE) {
        session_start();}
        $nif_usu = $_POST["nif_usu"];
        $clave_usu = $_POST["clave_usu"];
        

        require_once ('con1.php');
        
        $mysqli->set_charset("utf8");
        /* PROTECCIÓN FRENTE A SQL INYECTADO (FUNCIÓN mysql_real_escape_string) */
        $nif_usu = $mysqli->real_escape_string($nif_usu);
        $clave_usu = $mysqli->real_escape_string($clave_usu);


        $_SESSION['nif'] = $nif_usu;

    if ($resultado1 = $mysqli->query("SELECT *, sysdate() FROM usuarios WHERE nif_usu='$nif_usu' and clave_usu='$clave_usu'")) {
        /* DETERMINA EL NÚMERO DE REGISTROS QUE DEVUELVE LA CONSULTA */
        $numeroRegistros = $resultado1->num_rows;

         
        
        if ($numeroRegistros) {
        /* ACCESO ACEPTADO */
        $_SESSION["autentificado"] = "si";
        while($row = $resultado1->fetch_assoc()) {
            $_SESSION['nombre'] = $row["nombre_usu"];
            $_SESSION['nif'] = $row["nif_usu"];
            $_SESSION['correo'] = $row["correo_usu"];
            $_SESSION['clave'] = $row["clave_usu"];
            $_SESSION['ape1'] = $row["ape1_usu"];
            $_SESSION['ape2'] = $row["ape2_usu"];
            $_SESSION['lugar'] = $row["lugar_usu"];
            $_SESSION['calle'] = $row["calle_usu"];
            $_SESSION['numero'] = $row["numero_usu"];
            $_SESSION['piso'] = $row["piso_usu"];
            $_SESSION['letra'] = $row["letra_usu"];
            $_SESSION['ciudad'] = $row["ciudad_usu"];
            $_SESSION['codpost'] = $row["codpost_usu"];
            $_SESSION['pais'] = $row["pais_usu"];

            $_SESSION['delito'] = $row["delito_usu"];
            $_SESSION['estado'] = $row["estado_usu"];

            $_SESSION['fechnac'] = $row["fechnac_usu"];
            $_SESSION['fechalta'] = $row["fechalta_usu"];
            //$_SESSION['fechhoy'] = $row["sysdate()"];
            $_SESSION['fechhoy'] = $row['sysdate()'];
        }

        //echo $_SESSION['ciudad'];
       //alert(echo $_SESSION['fechhoy']);

       
/* LIBERA LA MATRIZ QUE ALBERGA EL CONJUNTO DE RESULTADOS */
$resultado1->free();
/* CIERRA LA CONEXIÓN */
$mysqli->close();
        
        /* SE DEVUELVE 1 A $.ajax (done) EN funciones.js
        * INDICANDO QUE EL ACCESO HA SIDO ACEPTADO
        */
        echo 1;
        
        
    } else {
/* LIBERA LA MATRIZ QUE ALBERGA EL CONJUNTO DE RESULTADOS */
$resultado1->free();
/* CIERRA LA CONEXIÓN */
$mysqli->close();

        /* ACCESO DENEGADO */
        /* DESTRUCCIÓN DE LA SESIÓN */
        session_destroy();
        /* SE DEVUELVE 0 A $.ajax (done) EN funciones.js
        * INDICANDO QUE EL ACCESO HA SIDO DENEGADO
        */
        echo 0;
        }
    }
?>