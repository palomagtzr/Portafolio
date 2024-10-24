var registro =
    "<tr><th>NOMBRE DEL MIEMBRO</th><th>CORREO ELECTRÓNICO</th><th>ACTIVIDADES DE INTERÉS</th><th>PAGO</th><th>FECHA DE INICIO</th><th>COLOR DE CREDENCIAL</th><th>FRECUENCIA</th></tr > ";
var estilo = 0;

function registrar() {
    /* Validación de formulario completo*/
    if (document.getElementById("nombre").value == false) {
        alert("Nombre vacío. Debes llenar todos los campos");
    } else if (document.getElementById("mail").value == "") {
        alert("Correo electrónico vacío. Debes llenar todos los campos");
    } else if (document.querySelectorAll('input[name=activity]:checked').length == 0) {
        alert("No seleccionó ninguna actividad, debe seleccionar al menos una");
    } else if (document.querySelector('input[name=payment]:checked').length == 0) {
        alert("No seleccionó ninguna de las opciones de pago. Debe seleccionar una opción");
    } else if (document.getElementById("fecha").value == '') {
        alert("No estableció ninguna fecha de inicio");
    } else if (document.getElementById("asistencia").value == 0) {
        alert("Debe especificar un aproximado de veces a la semana que asistirá al gimnasio");
    } else {
        if (estilo % 2 == 0) {
            registro += "<tr class=\"renglon1\">";
        } else {
            registro += "<tr class=\"renglon2\">";
        }
        /* Nombre del miembro */
        x = document.getElementById("nombre");
        registro = registro + "<td>" + x.value + "</td>";

        /* Correo electrónico */
        x = document.getElementById("mail");
        registro = registro + "<td>" + x.value + "</td>";

        /* Actividades */
        registro = registro + "<td>";
        iterable = document.querySelectorAll('input[name=activity]:checked');
        for (i of iterable) {
            registro = registro + i.value + "<br>";
        }
        registro = registro + "</td>";

        /* Pago */
        x = document.querySelector('input[name=payment]:checked');
        registro = registro + "<td>" + x.value + "</td>";

        /* Fecha de inicio */
        x = document.getElementById("fecha");
        registro = registro + "<td>" + x.value + "</td>";

        /* Color de credencial */
        x = document.getElementById("credencial");
        registro = registro + "<td>" + x.value + "</td>";

        /* Frecuencia de asistencia */
        x = document.getElementById("asistencia");
        registro = registro + "<td>" + x.value + " veces por semana" + "</td>";

        /* Finalización del renglón de la tabla */
        registro = registro + "</tr>";
        document.getElementById("miembros").innerHTML = registro;

        /* Limpiar los campos */
        document.getElementById("nombre").value = "";

        document.getElementById("mail").value = "";

        document.getElementById("gym").checked = false;
        document.getElementById("spinning").checked = false;
        document.getElementById("yoga").checked = false;
        document.getElementById("pilates").checked = false;
        document.getElementById("barre").checked = false;

        document.getElementById("dia").checked = false;
        document.getElementById("mes").checked = false;
        document.getElementById("trimestre").checked = false;
        document.getElementById("año").checked = false;

        document.getElementById("fecha").value = '';

        document.getElementById("credencial").value = "#000000";

        document.getElementById("asistencia").value = 0;

        estilo++;
    }
}