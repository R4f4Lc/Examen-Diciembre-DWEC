/*
RAFAEL LOPEZ CRUZ
*/
{   
    //Expresiones regulares
    let expresionNombre = new Array(new RegExp("^[a-zA-Zá-úÁ-Ú ]+$"),"Error. ¡No es un nombre válido!");
    let expresionFechaNacimiento = new Array(new RegExp("^[0-9]{2}/{1}|-{1}[0-9]{2}/{1}|-{1}[0-9]{4}$"),"Error. ¡No es una fecha de nacimiento válida!");
    let expresionDni = new Array(new RegExp("(^[0-9]{8}-{1}| {1}[A-Za-z]{1}$)|(^[0-9]{8}[A-Za-z]{1}$)"),"Error. ¡No es un DNI válido!","TRWAGMYFPDXBNJZSQVHLCKET");
    
    //Comprueba si el nombre es correcto
    let checkNombre = function(nombre){
        if(expresionNombre[0].test(nombre.trim()))
            return true
        return false
    }

    //Comprueba si la fecha es correcta
    let checkFechaNacimiento = function(fechaNacimiento){
        if(expresionFechaNacimiento[0].test(fechaNacimiento) && new Date(fechaNacimiento) != "Invalid Date")
            return true
        return false
    }

    //Comprueba si el DNI es correcto
    let checkDni = function(dni){
        let numeroDni = parseInt(dni[0]+dni[1]+dni[2]+dni[3]+dni[4]+dni[5]+dni[6]+dni[7]);
        if(expresionDni[0].test(dni.trim()) && expresionDni[2][numeroDni%23] == dni[dni.length-1].toUpperCase())
            return true
        return false
    }

    let init= function(){
        let inputNombre = document.getElementById("nombre");
        let inputFechaNacimiento = document.getElementById("fechaNacimiento");
        let inputDni = document.getElementById("dni");
        
        let spanErrorNombre = document.getElementById("errorNombre");
        let spanErrorFechaNacimiento = document.getElementById("errorFechaNacimiento");
        let spanErrorDni = document.getElementById("errorDni");

        let botonCrearEmpleado = document.getElementById("crearEmpleado");
        
        //Si desaparece el foco que compruebe si el valor es válido

        inputNombre.addEventListener("blur",function(){
            if(!checkNombre(inputNombre.value))
                spanErrorNombre.innerHTML = expresionNombre[1];
            else
                spanErrorNombre.innerHTML = "";
        })

        inputFechaNacimiento.addEventListener("blur",function(){
            if(!checkFechaNacimiento(inputFechaNacimiento.value))
                spanErrorFechaNacimiento.innerHTML = expresionFechaNacimiento[1];
            else
                spanErrorFechaNacimiento.innerHTML  = "";
        })

        inputDni.addEventListener("blur",function(){
            if(!checkDni(inputDni.value))
                spanErrorDni.innerHTML = expresionDni[1];
            else
                spanErrorDni.innerHTML  = "";
        })

        //Si se pulsa crear un nuevo empleado comprueba si los valores son válidos y crea al empleado
        botonCrearEmpleado.addEventListener("click",function(){
            if(!checkNombre(inputNombre.value))
                spanErrorNombre.innerHTML = expresionNombre[1];
            else
                spanErrorNombre.innerHTML = "";
            
            if(!checkDni(inputDni.value))
                spanErrorDni.innerHTML = expresionDni[1];
            else
                spanErrorDni.innerHTML  = "";
                
            if(!checkFechaNacimiento(inputFechaNacimiento.value))
                spanErrorFechaNacimiento.innerHTML = expresionFechaNacimiento[1];
            else
                spanErrorFechaNacimiento.innerHTML  = "";

            if(checkNombre(inputNombre.value) && checkDni(inputDni.value) && checkFechaNacimiento(inputFechaNacimiento.value)){
                let empleado = new Empleado(inputNombre.value,inputFechaNacimiento.value,inputDni.value);
                empleado.crearNuevaVentana();
                inputNombre.value = "";
                inputDni.value = "";
                inputFechaNacimiento.value = "";
            }
        })
    }

    document.addEventListener("DOMContentLoaded", init);
}