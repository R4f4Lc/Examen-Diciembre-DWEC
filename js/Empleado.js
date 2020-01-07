/*
RAFAEL LOPEZ CRUZ
*/
{
    function Empleado(nombre, fechaNacimiento,dni){
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
        this.dni = dni;
    }

    Empleado.prototype.crearNuevaVentana = function(){
        this.ventana = window.open("","","width=300,height=300");
        this.ventana.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="author" content="Rafael Lopez Cruz">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>De todo un poco</title>
        </head>
        <body>
            <h1>Rafael López Cruz</h1>
            <noscript>
                <h1>Esta p&aacute;gina requiere el uso de JavaScript</h1>
            </noscript>
            <h2>Datos del empleado:</h2>
            Nombre: `+this.nombre+`
            <br>Fecha de nacimiento: `+this.fechaNacimiento+`
            <br>DNI: `+this.dni+`
        </body>
        </html>
        `);
        this.ventana.document.close();
    }
}