<section id="secSede">
<h1>Bienvenido a la Sede Electrónica</h1>
    
    <div class="gris">
        <div id="sede1">
            <input type="button" class="iniciar boton" value="INICIAR SESIÓN">
            <input type="button" class="registrar boton" value="REGISTRARSE">
        </div>
        <p>
        <div id="inicio" class="blanco">
            <h3>Bienvenid@ a la pantalla de inicio de sesión, rellene los dos campos que tiene a continuación y pulse al botón aceptar.</h3>
            <p><label for="nif">NIF: </label><input type="text" name="nif_usu" id="nif_ini" value="57689707P" onblur="validarNif1();" placeholder="DNI/NIF"/>
            <div id="errNif_ini"></div>
            <p><label for="clave">Clave de acceso: </label><input type="password" name="clave_usu" id="clave_ini" value="caodincaodin" onblur="validarCon();" placeholder="******"/><p>
            <div id="errClave_ini"></div>
            
            <input type="button" id="btn1" class="aceptar_ini boton" value="ACEPTAR">
            <div id="resultado1"></div>
            <a href="recu.php" style="color:blue;"><em>¿Olvidó la contraseña? Haga click aquí.</em></a>
        </div>
        <p>
        <div id="registro" class="blanco">
            <h3>Bienvenid@ a la pantalla de registro, solo tendrá que rellenar los campos que tiene a continuación y darle al botón aceptar.<p>
            Una vez registrad@, inicie sesión y disfrute de la página.</h3>
            <fieldset>
                <legend>Datos personales</legend>
                <div>
                    <p><label for="correo">Correo electrónico: </label><input type="text" name="correo_usu" id="correo_reg" onblur="validarEmail();" placeholder="email@email.com"/>
                    <div id="errCorreo_reg"></div>
                    <p><label for="clave">Clave de acceso: </label><input type="password" name="clave_usu" id="clave_reg" onblur="validarCon();" placeholder="********" title="Recomendaciones: Al menos 8 caracteres incluyendo letras y números"/><p>
                    <div id="errClave_reg"></div>
                    <p><label for="fechalta">Fecha de alta en el sistema: </label><input type="date" name="fechalta_usu" id="fechalta_reg" title=" " disabled/>
                    <div id="errFechalta_reg"></div>
                    <p><label for="nif">NIF: </label><input type="text" name="nif_usu" id="nif_reg" onblur="validarNif2();" placeholder="DNI/NIF"/><p>
                    <div id="errNif_reg"></div>
                </div>
                <div>
                    <p><label for="nombre">Nombre propio: </label><input type="text" name="nombre_usu" id="nombre_reg" onblur="validarNom();" placeholder="Nombre"/>
                    <div id="errNombre_reg"></div>
                    <p><label for="ape1">Primer apellido: </label><input type="text" name="ape1_usu" id="ape1_reg" onblur="validarApe();" placeholder="Apellido"/>
                    <div id="errApe1_reg"></div>
                    <p><label for="ape2">Segundo apellido: </label><input type="text" name="ape2_usu" id="ape2_reg" placeholder="Apellido"/><p>
                    <div id="errApe2_reg"></div>
                    <p><label for="fechnac">Fecha de nacimiento: </label><input type="date" name="fechnac_usu" id="fechnac_reg"/>
                    <div id="errFechnac_reg"></div>
                    <p><label for="lugar">Lugar de nacimiento: </label><input type="text" name="lugar_usu" id="lugar_reg" onblur="validarLug();" placeholder="Localidad/país"/>
                    <div id="errLugar_reg"></div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Dirección</legend>
                <div>
                    <p><label for="calle">Calle, Camino, Avenida, plaza...: </label><input type="text" name="calle_usu" id="calle_reg" onblur="validarCall();" placeholder="Calle"/>
                    <div id="errCalle_reg"></div>
                    <p><label for="numero">Número del domicilio: </label><input type="number" name="numero_usu" id="numero_reg" onblur="validarNum();" placeholder="num"/>
                    <div id="errNumero_reg"></div>
                    <p><label for="piso">Piso del domicilio: </label><input type="text" name="piso_usu" id="piso_reg" placeholder="-"/>
                    <div id="errPiso_reg"></div>
                    <p><label for="letra">Letra del domicilio: </label><input type="text" name="letra_usu" id="letra_reg" placeholder="-"/><p>
                    <div id="errLetra_reg"></div>
                </div>
                <div>
                    <p><label for="ciudad">Ciudad del domicilio: </label><input type="text" name="ciudad_usu" id="ciudad_reg" onblur="validarCiu();" placeholder="-"/>
                    <div id="errCiudad_reg"></div>
                    <p><label for="codpost">Código postal del domicilio: </label><input type="number" name="codpost_usu" id="codpost_reg" placeholder="-"/>
                    <div id="errCodpost_reg"></div>
                    <p><label for="pais">País del domicilio: </label><input type="text" name="pais_usu" id="pais_reg" placeholder="País" onblur="validarPai();" placeholder="-"/>
                    <div id="errPais_reg"></div>
                </div>
            </fieldset>
            <fieldset>
                <legend>Datos legales</legend>
                <label for="delito"><p>Condenado por algún delito de naturaleza sexual:</p> </label>
                    <p><input type="radio" name="delito_usu" id="delito_reg" value="No" checked/> No
                    <p><input type="radio" name="delito_usu" id="delito_reg" value="Si"/> Si
                <label for="estado"><p>Estado biológico:</p> </label> 
                    <p><input type="radio" name="estado_usu" id="estado_reg" value="Vivo" checked/> Vivo
                    <p><input type="radio" name="estado_usu" id="estado_reg" value="Muerto"/> Muerto
            </fieldset>

            <p><input type="checkbox" id="servicio" value="servicio">
            Acepto las condiciones de servicio.
            <div id="errServicio"></div>
            <p><input type="checkbox" id="datospers" value="datospers">
            Permito el uso de mis datos con caracter estadístico. Este ayuntamiento no cede datos para uso comercial.
            <div id="errDatospers"></div>

            <input type="button" id="btn2" class="aceptar_reg boton" value="ACEPTAR" onblur="registrar();">
            <div id="resultado2"></div>
        </div>
        

        
        <!--
        <p>
        <div id="tramites">
            <h3>Usuario encontrado.</h3>
            <input type="button" class="personal boton" value="CARPETA PERSONAL">
            <input type="button" class="documentos boton" value="CATÁLOGO DE TRÁMITES">
        </div>
        <p>
        <div id="personal" class="blanco"> 
            <h3>Bienvenid@ a la carpeta personal, aquí podrá modificar sus datos.</h3><p>
            <fieldset>
                <legend>Identificación</legend><p>
                <label for="id">Identificación del usuario: </label><input type="text" name="id" id="id_mod" disabled/>
            </fieldset>
            <fieldset>
                <legend>Datos personales</legend><p>
                <label for="correo">Correo electrónico: </label><input type="text" name="correo_usu" id="correo_mod" placeholder="email@email.com"/>
                <label for="clave">Clave de acceso: </label><input type="password" name="clave_usu" id="clave_mod" placeholder="********" title="Recomendaciones: Al menos 8 caracteres incluyendo letras y números"/><p>
                <label for="fechalta">Fecha de alta en el sistema: </label><input type="date" name="fechalta_usu" id="fechalta_mod" disabled/>
                <label for="nif">NIF: </label><input type="text" name="nif_usu" id="nif_mod" placeholder="DNI/NIF" disabled/><p>
                <label for="nombre">Nombre propio: </label><input type="text" name="nombre_usu" id="nombre_mod" placeholder="Nombre" disabled/>
                <label for="ape1">Primer apellido: </label><input type="text" name="ape1_usu" id="ape1_mod" placeholder="Apellido" disabled/>
                <label for="ape2">Segundo apellido: </label><input type="text" name="ape2_usu" id="ape2_mod" placeholder="Apellido" disabled/><p>
                <label for="fechnac">Fecha de nacimiento: </label><input type="date" name="fechnac_usu" id="fechnac_mod"  disabled/>
                <label for="lugar">Lugar de nacimiento: </label><input type="text" name="lugar_usu" id="lugar_mod" placeholder="Localidad/país" disabled/>
            </fieldset>
            <fieldset>
                <legend>Dirección</legend>
                <p><label for="calle">Calle del domicilio: </label><input type="text" name="calle_usu" id="calle_mod" placeholder="Calle"/>
                <label for="numero">Número del domicilio: </label><input type="number" name="numero_usu" id="numero_mod" placeholder="num"/>
                <label for="piso">Piso del domicilio: </label><input type="text" name="piso_usu" id="piso_mod" placeholder="-"/>
                <label for="letra">Letra del domicilio: </label><input type="text" name="letra_usu" id="letra_mod" placeholder="-"/><p>
                <label for="ciudad">Ciudad del domicilio: </label><input type="text" name="ciudad_usu" id="ciudad_mod" placeholder="-"/>
                <label for="codpost">Código postal del domicilio: </label><input type="number" name="codpost_usu" id="codpost_mod" placeholder="-"/>
                <label for="pais">País del domicilio: </label><input type="text" name="pais_usu" id="pais_mod" placeholder="País" placeholder="-"/>
            </fieldset>
            <fieldset>
                <legend>Datos legales</legend>
                <p><label for="delito">Condenado por algún delito de naturaleza sexual: </label><input type="text" name="delito_usu" id="delito_mod"  disabled/>
                <label for="estado">Estado biológico: </label><input type="text" name="estado_usu" id="estado_mod"  disabled/><p>
            </fieldset>
            <input type="button" class="aceptar_mod boton" value="MODIFICAR">
            <div class="resu"></div>
        </div>

        <div id="documentos" class="blanco"> 
            <p>Trámites disponibles en su sede electrónica</p>
            <div id="tramitesActivos">
               
            </div>
        </div>-->


    </div>
</section>