/*
$(document).ready(function () {
    $("#b1").click(function (event) {
    SI ALGUNO DE LOS CAMPOS ESTÁ VACÍO NO SE REALIZA LA PETICIÓN A LA
    BASE DE DATOS
        if ($("#usuario").val().trim().length === 0 || $("#clave").val().trim().length === 0) {
            $("#resultado").html("Indique Usuario y Clave.");
        }
        else {
            $.ajax({
            type: "POST",
            url: "control-acceso.php",
            data: {usuario: $("#usuario").val(), clave: $("#clave").val()}
        }).done(function (msg) {
        if (msg == 1) {
            window.location.href = "acceso-aceptado.php";
        }
        else if (msg == 0) {
            $("#resultado").html("Usuario y/o clave incorrectos.")
        }
    });
    }
        $("#usuario").val("");
        $("#clave").val("");
    });
});
*/

// Contenedor al iniciar sesion
$(document).ready(function() {
    $("#btn1").click(function (event) {
        // SI ALGUNO DE LOS CAMPOS ESTÁ VACÍO NO SE REALIZA LA PETICIÓN A LA BASE DE DATOS
            if ($("#nif_ini").val().trim().length === 0 || $("#clave_ini").val().trim().length === 0) {
                $("#resultado1").html("Indique DNI/NIF y Clave.");
            }
            else {
                $.ajax({
                type: "POST",
                url: "control-acceso.php",
                data: {nif_usu: $("#nif_ini").val(), clave_usu: $("#clave_ini").val()}
            }).done(function (msg) {
            if (msg == 1) {
                window.location.href = "acceso-aceptado.php";
            }
            else if (msg == 0) {
                $("#resultado1").html("Usuario y/o clave incorrectos.")
            }
        });
        }
            $("#nif_ini").val("");
            $("#clave_ini").val("");
        });
});

// Insertar datos al registrarse 
$(document).ready(function() {
    $("#btn2").click(function(event) {  
        if ($("#correo_reg").val().trim().length === 0 || $("#clave_reg").val().trim().length === 0 || 
            $("#nif_reg").val().trim().length === 0 || $("#nombre_reg").val().trim().length === 0 || 
            $("#ape1_reg").val().trim().length === 0 || $("#ape2_reg").val().trim().length === 0 || 
            $("#fechnac_reg").val().trim().length === 0 || $("#lugar_reg").val().trim().length === 0 || 
            $("#calle_reg").val().trim().length === 0 || $("#numero_reg").val().trim().length === 0 ||
            $("#piso_reg").val().trim().length === 0 || $("#letra_reg").val().trim().length === 0 ||
            $("#ciudad_reg").val().trim().length === 0 || $("#codpost_reg").val().trim().length === 0 ||
            $("#pais_reg").val().trim().length === 0 || $("#delito_reg").val().trim().length === 0 ||
            $("#estado_reg").val().trim().length === 0) {
                $("#resultado2").html("<p class='err'>Rellene los campos.");
        } 
        else {
            $.ajax({
                type: "POST",
                url: "registro_nuevo.php",
                data: { correo_usu: $("#correo_reg").val(), clave_usu: $("#clave_reg").val(),
                        fechalta_usu: $("#fechalta_reg").val(), nif_usu: $("#nif_reg").val(),
                        nombre_usu: $("#nombre_reg").val(), ape1_usu: $("#ape1_reg").val(),
                        ape2_usu: $("#ape2_reg").val(), fechnac_usu: $("#fechnac_reg").val(),
                        lugar_usu: $("#lugar_reg").val(), calle_usu: $("#calle_reg").val(),
                        numero_usu: $("#numero_reg").val(), piso_usu: $("#piso_reg").val(),
                        letra_usu: $("#letra_reg").val(), ciudad_usu: $("#ciudad_reg").val(),
                        codpost_usu: $("#codpost_reg").val(), pais_usu: $("#pais_reg").val(),
                        delito_usu: $("#delito_reg").val(), estado_usu: $("#estado_reg").val()}
                }).done(function (msg) {
                    $("#resultado2").html( msg );
                });
        }
        $("#correo_reg").val( "" );
        $("#clave_reg").val( "" );
        $("#fechalta_reg").val( "" );
        $("#nif_reg").val( "" );
        $("#nombre_reg").val( "" );
        $("#ape1_reg").val( "" );
        $("#ape2_reg").val( "" );
        $("#fechnac_reg").val( "" );
        $("#lugar_reg").val( "" );
        $("#calle_reg").val( "" );
        $("#numero_reg").val( "" );
        $("#piso_reg").val( "" );
        $("#letra_reg").val( "" );
        $("#ciudad_reg").val( "" );
        $("#codpost_reg").val( "" );
        $("#pais_reg").val( "" );
        $("#delito_reg").val( "" );
        $("#estado_reg").val( "" );
    });
}); 

// Modificar datos
$(document).ready(function() {
    $(".aceptar_mod").click(function(event) {   
    $.ajax({
    type: "POST",
    url: "registro_modificar.php",
    data: { correo_usu: $("#correo_mod").val(), clave_usu: $("#clave_mod").val(),
            fechalta_usu: $("#fechalta_mod").val(), nif_usu: $("#nif_mod").val(),
            nombre_usu: $("#nombre_mod").val(), ape1_usu: $("#ape1_mod").val(),
            ape2_usu: $("#ape2_mod").val(), fechnac_usu: $("#fechnac_mod").val(),
            lugar_usu: $("#lugar_mod").val(), calle_usu: $("#calle_mod").val(),
            numero_usu: $("#numero_mod").val(), piso_usu: $("#piso_mod").val(),
            letra_usu: $("#letra_mod").val(), ciudad_usu: $("#ciudad_mod").val(),
            codpost_usu: $("#codpost_mod").val(), pais_usu: $("#pais_mod").val(),
            delito_usu: $("#delito_mod").val(), estado_usu: $("#estado_mod").val()
        }
    }).done(function( msg ) {
    $(".resu").html( msg );
    });
    $("#correo_mod").val( "" );
    $("#clave_mod").val( "" );
    $("#fechalta_mod").val( "" );
    $("#nif_mod").val( "" );
    $("#nombre_mod").val( "" );
    $("#ape1_mod").val( "" );
    $("#ape2_mod").val( "" );
    $("#fechnac_mod").val( "" );
    $("#lugar_mod").val( "" );
    $("#calle_mod").val( "" );
    $("#numero_mod").val( "" );
    $("#piso_mod").val( "" );
    $("#letra_mod").val( "" );
    $("#ciudad_mod").val( "" );
    $("#codpost_mod").val( "" );
    $("#pais_mod").val( "" );
    $("#delito_mod").val( "" );
    $("#estado_mod").val( "" );
    });
});

// información al salid de la sede electrónica
$(".cerrar").click(function(){ 
    alert("Sesión cerrada. Para poder ver sus trámites online reinicie la sesión");
});
$(".atras").click(function(){ 
    alert("Está saliendo de la sección segura de la web");
});

// Contenedor busqueda cambio de contraseña
$(document).ready(function() {
    $("#btnR").click(function (event) {
        if ($("#nif_rec").val().trim().length === 0 || $("#nombre_rec").val().trim().length === 0 ||
            $("#ape1_rec").val().trim().length === 0 || $("#ape2_rec").val().trim().length === 0) {
            $("#resultadoRecu").html("Rellene todos los campos.");
        }
        else {
            $.ajax({
            type: "POST",
            url: "control-acceso2.php",
            data: {nif_rec: $("#nif_rec").val(), nombre_usu: $("#nombre_rec").val(),
                ape1_usu: $("#ape1_rec").val(), ape2_usu: $("#ape2_rec").val()}
                
        }).done(function (msg) {
            /*alert(json.v1);
            alert(json.v2);*/
            
            if (msg == 1) { 
                $("#resultadoRecu").html("");
                $("#recu1").hide(500);
                $("#recu2").slideToggle();
            }
            else if (msg == 0) {
                $("#resultadoRecu").html("Datos incorrectos.")
            }
        });
    }
    /*$("#nif_rec").val("");*/
    $("#nombre_rec").val("");
    $("#ape1_rec").val("");
    $("#ape2_rec").val("");
    });
});

// Cambiar contraseña
$(document).ready(function() {
    $("#btnR2").click(function(event) { 
        if ($("#clave_rec").val() != $("#clave_rec2").val()) {
            $("#resultadoRecu2").html("Las contraseñas no coinciden.");
        }
        else if ($("#clave_rec").val().trim().length === 0 || $("#clave_rec2").val().trim().length === 0) {
            $("#resultadoRecu2").html("Rellene todos los campos.");
        }
        else {
            $.ajax({
                type: "POST",
                url: "registro_cambiar.php",
                data: { clave_usu1: $("#clave_rec").val(), nif_usu: $("#nif_rec2").val()}
            }).done(function (msg) {
                $("#resultadoRecu2").html(msg);
            });
        }
        $("#clave_rec").val("");
        $("#clave_rec2").val("");
    });
});