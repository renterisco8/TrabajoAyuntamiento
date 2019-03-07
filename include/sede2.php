<section id="secSede2">
    
<h1>Sede Electrónica</h1>
    
    <div class="gris">
        
        <?php 
        $deli="";
        $estd="";
        if ($_SESSION['delito'] == 0) {
            $deli="NO";
        } else {
            $deli="SI";
        }

         if ($_SESSION['estado'] == 0) {
            $estd="Vivo";
        } else {
            $estd="Fallecido";
        }

         ?>

        <p>
        <div id="tramites">
            <div id="nifOculto" class="oculto"><?php echo $_SESSION['nif'];?></div>
            <h3>Bienvenido, <?php echo $_SESSION['nombre'];?> <?php echo $_SESSION['ape1'];?>. Ha accedido usted mediante conección segura.</h3>
            <input type="button" class="documentos boton" value="CATÁLOGO DE TRÁMITES">
            <input type="button" class="personal boton" value="CARPETA PERSONAL">
            
        </div>
        <p>
        <div id="personal" class="blanco"> 

            <h3>Bienvenid@ a la carpeta personal, aquí podrá modificar sus datos.</h3>
            <h1>Bienvenido</h1>
            
            <p>
            <fieldset>
                <legend>Datos personales</legend><p>
                <div>
                    <p><label for="correo">Correo electrónico: </label><input type="text" name="correo_usu" id="correo_mod" value="<?php echo $_SESSION['correo'];?>"/>
                    <p><label for="clave">Clave de acceso: </label><input type="password" name="clave_usu" id="clave_mod" value="<?php echo $_SESSION['clave'];?>" title="Recomendaciones: Al menos 8 caracteres incluyendo letras y números"/><p>
                    <p><label for="fechalta">Fecha de alta en el sistema: </label><input type="date" name="fechalta_usu" id="fechalta_mod" value="<?php echo $_SESSION['fechalta'];?>" disabled/>
                    <p><label for="nif">NIF: </label><input type="text" name="nif_usu" id="nif_mod" value="<?php echo $_SESSION['nif'];?>" disabled/>
                    
                </div>
                <div>
                    <p><label for="nombre">Nombre propio: </label><input type="text" name="nombre_usu" id="nombre_mod" value="<?php echo $_SESSION['nombre'];?>" disabled/>
                    <p><label for="ape1">Primer apellido: </label><input type="text" name="ape1_usu" id="ape1_mod" value="<?php echo $_SESSION['ape1'];?>" disabled/>
                    <p><label for="ape2">Segundo apellido: </label><input type="text" name="ape2_usu" id="ape2_mod" value="<?php echo $_SESSION['ape2'];?>" disabled/>
                    <p><label for="fechnac">Fecha de nacimiento: </label><input type="date" name="fechnac_usu" id="fechnac_mod" value="<?php echo $_SESSION['fechnac'];?>" disabled/>
                    <p><label for="lugar">Lugar de nacimiento: </label><input type="text" name="lugar_usu" id="lugar_mod" value="<?php echo $_SESSION['ciudad'];?>" disabled/>
                    <p class="oculto"><label for="lugar">Fecha de hoy: </label><input type="text" name="fechhoy_usu" id="fechhoy_mod" value="<?php echo $_SESSION['fechhoy'];?>" disabled/>
                </div>
            </fieldset>
            <fieldset>
                <legend>Dirección</legend>
                <div>
                    <p><label for="calle">Calle del domicilio: </label><input type="text" name="calle_usu" id="calle_mod" value="<?php echo $_SESSION['calle'];?>"/>
                    <p><label for="numero">Número del domicilio: </label><input type="number" name="numero_usu" id="numero_mod" value="<?php echo $_SESSION['numero'];?>"/>
                    <p><label for="piso">Piso del domicilio: </label><input type="text" name="piso_usu" id="piso_mod" value="<?php echo $_SESSION['piso'];?>"/>
                    <p><label for="letra">Letra del domicilio: </label><input type="text" name="letra_usu" id="letra_mod" value="<?php echo $_SESSION['letra'];?>"/>
                </div>
                <div>
                    <p><label for="ciudad">Ciudad del domicilio: </label><input type="text" name="ciudad_usu" id="ciudad_mod" value="<?php echo $_SESSION['ciudad'];?>"/>
                    <p><label for="codpost">Código postal del domicilio: </label><input type="number" name="codpost_usu" id="codpost_mod" value="<?php echo $_SESSION['codpost'];?>"/>
                    <p><label for="pais">País del domicilio: </label><input type="text" name="pais_usu" id="pais_mod" placeholder="País" value="<?php echo $_SESSION['pais'];?>"/>
                </div>
            </fieldset>
            <fieldset>
                <legend>Datos legales</legend>
                <p><label for="delito">Condenado por algún delito de naturaleza sexual: </label><input type="text" name="delito_usu" id="delito_mod" value="<?php echo $deli; ?>" disabled/>
                <p><label for="estado">Estado biológico: </label><input type="text" name="estado_usu" id="estado_mod" value="<?php echo $estd;?>" disabled/><p>
            </fieldset>
            <input type="button" class="aceptar_mod boton" value="MODIFICAR">
            <div class="resu"></div>
        </div>

        <div id="documentos" class="blanco"> 
            <p>Trámites disponibles en la sede electrónica</p>
            <?php include 'verTramites.php'; ?>
        </div>
    </div>
</section>