/*
RAFAEL LOPEZ CRUZ
*/

//Expresiones regulares
let expresiones = {
    expresionNombre:new Array(new RegExp("^[a-zA-Zá-úÁ-Ú ]+$"),"Error. ¡No es un nombre válido!"),
    expresionFechaNacimiento: new Array(new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"),"Error. ¡No es una fecha de nacimiento válida!"),
    expresionDni:new Array(new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"),"Error. ¡No es un DNI válido!","TRWAGMYFPDXBNJZSQVHLCKET")
}

//Comprueba si el nombre es correcto
let checkNombre = function(nombre){
    if(expresiones.expresionNombre[0].test(nombre.trim()))
        return true;
    return false;
}
//Comprueba si la fecha es correcta
let checkFechaNacimiento = function(fechaNacimiento){
    if(expresiones.expresionFechaNacimiento[0].test(fechaNacimiento) && new Date(fechaNacimiento) != "Invalid Date")
        return true;
    return false;
}
//Comprueba si el DNI es correcto
let checkDni = function(dni){
    let numeroDni = parseInt(dni[0]+dni[1]+dni[2]+dni[3]+dni[4]+dni[5]+dni[6]+dni[7]);
    if(expresiones.expresionDni[0].test(dni.trim()) && expresiones.expresionDni[2][numeroDni%23] == dni[dni.length-1].toUpperCase())
        return true;
    return false;
}