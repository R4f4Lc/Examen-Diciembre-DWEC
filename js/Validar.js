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
    return (expresiones.expresionNombre[0].test(nombre.trim()));
}
//Comprueba si la fecha es correcta
let checkFechaNacimiento = function(fechaNacimiento){
    return (expresiones.expresionFechaNacimiento[0].test(fechaNacimiento) && new Date(fechaNacimiento[3]+fechaNacimiento[4]+"/"+fechaNacimiento[0]+fechaNacimiento[1]+"/"+fechaNacimiento[6]+fechaNacimiento[7]+fechaNacimiento[8]+fechaNacimiento[9]) != "Invalid Date")
}
//Comprueba si el DNI es correcto
let checkDni = function(dni){
    let numeroDni = parseInt(dni[0]+dni[1]+dni[2]+dni[3]+dni[4]+dni[5]+dni[6]+dni[7]);
    return (expresiones.expresionDni[0].test(dni.trim()) && expresiones.expresionDni[2][numeroDni%23] == dni[dni.length-1].toUpperCase());
}