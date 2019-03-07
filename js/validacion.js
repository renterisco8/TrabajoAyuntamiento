const p = "<p class='err'>";
const err = new Array();
    err[0]="Carácteres no admitidos. Por favor, use solo números y letras de la A a la Z en mayúsculas y sin espacios";
    err[1]="Longitud de nif incorrecto. Escriba su nif junto a su letra";
    err[2]="Escriba en mayúsculas, por favor";
    err[3]="Este campo no puede quedar vacío";
    err[4]="Longitud de campo sobrepasada";
    err[5]="La contraseña ha de tener un mínimo de 8 caracteres alfa-numéricos";
    err[6]="Carácteres no admitidos. Por favor, use solo letras de la A a la Z en mayúsculas";
    err[7]="Email erróneo";


// ============= NIF =============

function validarNif1() {
    const texto = document.getElementById("nif_ini").value;

    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890 ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errNif_ini").innerHTML = (p + err[0]);
        document.getElementById("nif_ini").value = "";
        return;
    } else if (texto.length < 9 || texto.length > 9){
       document.getElementById("errNif_ini").innerHTML = (p + err[1]);
       document.getElementById("nif_ini").value = "";
       return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errNif_ini").innerHTML = (p + err[2]);
        document.getElementById("nif_ini").value = "";
        return;
    } else{
        document.getElementById("errNif_ini").innerHTML = "";
        return;
    }
} 


function validarNif2() {
    const texto = document.getElementById("nif_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890 ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errNif_reg").innerHTML = (p + err[0]);
        document.getElementById("nif_reg").value = "";
        return;
    } else if (texto.length < 9 || texto.length > 9){
       document.getElementById("errNif_reg").innerHTML = (p + err[1]);
       document.getElementById("nif_reg").value = "";
       return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errNif_reg").innerHTML = (p + err[2]);
        document.getElementById("nif_reg").value = "";
        return;
    } else{
        document.getElementById("errNif_reg").innerHTML = "";
        return;
    }
} 

// ============= CONTRASEÑA =============

function validarCon() {

    const passw = document.getElementById("clave_ini").value;
        if (passw.length < 7 || passw.length > 30) {
            document.getElementById("errClave_ini").innerHTML = (p + err[5]);
            return;
        } else if (texto.length < 1){
        document.getElementById("errLugar_reg").innerHTML = (p + err[3]);
        document.getElementById("lugar_reg").value = "";
        return;
        }
}



// ============= NOMBRE =============

function validarNom() {//alert("hola");
    const texto = document.getElementById("nombre_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    let simbol = 0;
    //alert(texto.length);
    for(let i = 0; i < texto.length; i++ ){//MIæIAM -- 13 11 -1 11 0 13
        //alert(i);
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }
    //alert(simbol+" ");

    if (simbol == 1){
        document.getElementById("errNombre_reg").innerHTML = (p + err[6]);
        document.getElementById("nombre_reg").value = "";
        return;
    } else if (texto.length < 1){
       document.getElementById("errNombre_reg").innerHTML = (p + err[3]);
       document.getElementById("nombre_reg").value = "";
       return;
    } else if (texto.length > 29) {
        document.getElementById("errNombre_reg").innerHTML = (p + err[4]);
        document.getElementById("nombre_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errNombre_reg").innerHTML = (p + err[2]);
        document.getElementById("nombre_reg").value = "";
        return;
    } else {
        document.getElementById("errNombre_reg").innerHTML = "";
        return;
    }
} 

// ============= APELLIDO =============

function validarApe() {
    const texto = document.getElementById("ape1_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errApe1_reg").innerHTML = (p + err[6]);
        document.getElementById("ape1_reg").value = "";
        return;
    } else if (texto.length < 1){
       document.getElementById("errApe1_reg").innerHTML = (p + err[3]);
       document.getElementById("ape1_reg").value = "";
       return;
    } else if (texto.length > 29) {
        document.getElementById("errApe1_reg").innerHTML = (p + err[4]);
        document.getElementById("ape1_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errape1_reg").innerHTML = (p + err[2]);
        document.getElementById("ape1_reg").value = "";
        return;
    } else {
        document.getElementById("errApe1_reg").innerHTML = "";
        return;
    }
} 
// ============= LUGAR =============

function validarLug() {
    const texto = document.getElementById("lugar_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errLugar_reg").innerHTML = (p + err[6]);
        document.getElementById("lugar_reg").value = "";
        return;
    } else if (texto.length < 1){
       document.getElementById("errLugar_reg").innerHTML = (p + err[3]);
       document.getElementById("lugar_reg").value = "";
       return;
    } else if (texto.length > 29) {
        document.getElementById("errLugar_reg").innerHTML = (p + err[4]);
        document.getElementById("lugar_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errLugar_reg").innerHTML = (p + err[2]);
        document.getElementById("lugar_reg").value = "";
        return;
    } else {
        document.getElementById("errLugar_reg").innerHTML = "";
        return;
    }
} 

//====================== EMAIL =================

//      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validarEmail() {
    const texto = document.getElementById("correo_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    const patron = /^[\w-\.]{3,}@([\w-]{2,}\.)+\w{2,4}$/;
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    /*if (simbol == 1){
        document.getElementById("errCorreo_reg").innerHTML = (p + err[6]);
        document.getElementById("correo_reg").value="";
        return;
    } else */if ( patron.test(correo_reg)) {
        document.getElementById('errCorreo_reg').innerHTML = (p + err[7]);
        document.getElementById('correo_reg').focus();
        return false;
    } else if (texto.length < 1){
        document.getElementById("errCorreo_reg").innerHTML = (p + err[3]);
        document.getElementById("correo_reg").value = "";
        return;
    } else if (texto.length > 30){
        document.getElementById("errCorreo_reg").innerHTML = (p + err[2]);
        document.getElementById("correo_reg").value="";
        return;
    } else {
        document.getElementById("errCorreo_reg").innerHTML = "";
        return;
    }
    
} 
// ============= Calle =============

function validarCall() {
    const texto = document.getElementById("calle_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errCalle_reg").innerHTML = (p + err[6]);
        document.getElementById("calle_reg").value = "";
        return;
    } else if (texto.length < 1){
       document.getElementById("errCalle_reg").innerHTML = (p + err[3]);
       document.getElementById("calle_reg").value = "";
       return;
    } else if (texto.length > 29) {
        document.getElementById("errCalle_reg").innerHTML = (p + err[4]);
        document.getElementById("calle_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errCalle_reg").innerHTML = (p + err[2]);
        document.getElementById("calle_reg").value = "";
        return;
    } else {
        document.getElementById("errCalle_reg").innerHTML = "";
        return;
    }
} 

// ============= Calle =============

function validarNum() {
    const texto = document.getElementById("calle_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890/ ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errNumero_reg").innerHTML = (p + err[6]);
        document.getElementById("numero_reg").value = "";
        return;
    } else if (texto.length > 29) {
        document.getElementById("errNumero_reg").innerHTML = (p + err[4]);
        document.getElementById("numero_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errNumero_reg").innerHTML = (p + err[2]);
        document.getElementById("numero_reg").value = "";
        return;
    } else {
        document.getElementById("errNumero_reg").innerHTML = "";
        return;
    }
} 
// ============= Ciudad =============

function validarCiu() {
    const texto = document.getElementById("ciudad_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errCiudad_reg").innerHTML = (p + err[6]);
        document.getElementById("ciudad_reg").value = "";
        return;
    } else if (texto.length < 1){
       document.getElementById("errCiudad_reg").innerHTML = (p + err[3]);
       document.getElementById("ciudad_reg").value = "";
       return;
    } else if (texto.length > 29) {
        document.getElementById("errCiudad_reg").innerHTML = (p + err[4]);
        document.getElementById("ciudad_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errCiudad_reg").innerHTML = (p + err[2]);
        document.getElementById("ciudad_reg").value = "";
        return;
    } else {
        document.getElementById("errCiudad_reg").innerHTML = "";
        return;
    }
} 

// ============= PAIS =============

function validarPai() {
    const texto = document.getElementById("pais_reg").value;
    let letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ ";
    let simbol = 0;
    for(let i = 0; i < texto.length; i++ ){
        if (letras.indexOf(texto[i],0) == -1)
            simbol = 1;
    }

    if (simbol == 1){
        document.getElementById("errPais_reg").innerHTML = (p + err[6]);
        document.getElementById("pais_reg").value = "";
        return;
    } else if (texto.length < 1){
       document.getElementById("errPais_reg").innerHTML = (p + err[3]);
       document.getElementById("pais_reg").value = "";
       return;
    } else if (texto.length > 29) {
        document.getElementById("errPais_reg").innerHTML = (p + err[4]);
        document.getElementById("pais_reg").value = "";
        return;
    } else if (texto != texto.toUpperCase()) {
        document.getElementById("errPais_reg").innerHTML = (p + err[2]);
        document.getElementById("pais_reg").value = "";
        return;
    } else {
        document.getElementById("errPais_reg").innerHTML = "";
        return;
    }
} 
// ============= Condiciones de uso y servicios ==============

function registrar() {
    if ( document.getElementById('servicio').checked == false)
        alert("Debe aceptar las condiciones de servicio");

    if ( document.getElementById('datospers').checked == false)
        alert("Debe aceptar el uso de datos personales");
}
