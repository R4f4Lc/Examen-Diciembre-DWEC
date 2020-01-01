/*
RAFAEL LOPEZ CRUZ
*/
{
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
                spanErrorNombre.innerHTML = expresiones.expresionNombre[1];
            else
                spanErrorNombre.innerHTML = "";
        })

        inputFechaNacimiento.addEventListener("blur",function(){
            if(!checkFechaNacimiento(inputFechaNacimiento.value))
                spanErrorFechaNacimiento.innerHTML = expresiones.expresionFechaNacimiento[1];
            else
                spanErrorFechaNacimiento.innerHTML  = "";
        })

        inputDni.addEventListener("blur",function(){
            if(!checkDni(inputDni.value))
                spanErrorDni.innerHTML = expresiones.expresionDni[1];
            else
                spanErrorDni.innerHTML  = "";
        })

        //Si se pulsa crear un nuevo empleado comprueba si los valores son válidos y crea al empleado
        botonCrearEmpleado.addEventListener("click",function(){
            if(!checkNombre(inputNombre.value))
                spanErrorNombre.innerHTML = expresiones.expresionNombre[1];
            else
                spanErrorNombre.innerHTML = "";
            
            if(!checkDni(inputDni.value))
                spanErrorDni.innerHTML = expresiones.expresionDni[1];
            else
                spanErrorDni.innerHTML  = "";
                
            if(!checkFechaNacimiento(inputFechaNacimiento.value))
                spanErrorFechaNacimiento.innerHTML = expresiones.expresionFechaNacimiento[1];
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