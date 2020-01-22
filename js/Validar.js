/*
RAFAEL LOPEZ CRUZ
*/

//Expresiones regulares
let expresiones = {
    expresionNombre:[new RegExp("^[a-zA-Zá-úÁ-Ú ]+$"),"Escribe un nombre. Por ejemplo: Pepe Garcia"],
    expresionFechaNacimiento: [new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"),"Introduce una fecha correcta. Por ejemplo 12/12/2012,12-12-2012"],
    expresionDni:[new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"),"Introduce un DNI válido. Por ejemplo 12345678Z","TRWAGMYFPDXBNJZSQVHLCKET"]
}

//Comprueba si el nombre es correcto
let checkNombre = function(nombre){
    return (expresiones.expresionNombre[0].test(nombre.trim()));
}

/**
 * Comprueba que la fecha con la expresión regular es correcta 
 * y parto los datos para formar el new Date()
 */
let checkFechaNacimiento = function(fechaNacimiento){
    return (expresiones.expresionFechaNacimiento[0].test(fechaNacimiento) && 
    new Date(fechaNacimiento[3]+fechaNacimiento[4]+"/"+fechaNacimiento[0]+fechaNacimiento[1]+"/"+fechaNacimiento[6]+fechaNacimiento[7]+fechaNacimiento[8]+fechaNacimiento[9]) != "Invalid Date")
}
//Comprueba si el DNI es correcto
let checkDni = function(dni){
    let numeroDni = parseInt(dni[0]+dni[1]+dni[2]+dni[3]+dni[4]+dni[5]+dni[6]+dni[7]);
    return (expresiones.expresionDni[0].test(dni.trim()) && expresiones.expresionDni[2][numeroDni%23] == dni[dni.length-1].toUpperCase());
}