/*
RAFAEL LOPEZ CRUZ
*/
{

    //Crea una ventana nueva
    let crearVentana = function(contenido){
        let ventana = window.open("","","width=650,height=600");
        ventana.document.write(contenido);
        ventana.document.close();
    }

    let init = function(){
        let a = document.getElementsByTagName("a");
        let button = document.getElementsByTagName("button");

        a[0].addEventListener("click",function(){
            crearVentana(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="author" content="Rafael Lopez Cruz">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>De todo un poco</title>
                <script src="js/detodounpoco.js"></script>
            </head>
            <body>
                <h1>Rafael López Cruz</h1>
                <noscript>
                    <h1>Esta p&aacute;gina requiere el uso de JavaScript</h1>
                </noscript>
                <button id="informa">Informa</button><button id="salir">Salir</button>
                <span id="info"></span>
            </body>
            </html>
            `);
        });
        
        button[0].addEventListener("click",function(){
            crearVentana(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="author" content="Rafael Lopez Cruz">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Formulario empleado</title>
            <script src="js/Empleado.js"></script>
            <script src="js/Validar.js"></script>
            <script src="js/formularioEmpleado.js"></script>
        </head>
        <body>
            <h1>Rafael López Cruz</h1>
            <noscript>
                <h1>Esta p&aacute;gina requiere el uso de JavaScript</h1>
            </noscript>
                Nombre: <input type="text" id="nombre"><span id="errorNombre" style="color:red;"></span><br>
                Fecha de nacimiento <input type="text" id="fechaNacimiento"><span id="errorFechaNacimiento" style="color:red;"></span><br>
                DNI: <input type="text" id="dni"><span id="errorDni" style="color:red;"></span><br>
                <button id="crearEmpleado">Nuevo Empleado</button>
        </body>
        </html>
        `);
        });
    }

    window.addEventListener("DOMContentLoaded", init);
}