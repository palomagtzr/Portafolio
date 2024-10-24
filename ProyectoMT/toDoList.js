var newTask = "<tr><th>   </th><th>TAREA</th><th>FECHA DE ENTREGA</th></tr>";
var estilo = 0;

function agregar() {
    if (document.getElementById("newTask").value == false) {
        alert("Debes escribir el nombre de la tarea antes de agregarla");
    } else {
        if (estilo % 2 == 0) {
            newTask += "<tr class=\"renglon1\">";
        } else {
            newTask += "<tr class=\"renglon2\">";
        }

        // Checkbox
        newTask += "<td><input type='checkbox' class='Check'></td>";

        //Nueva tarea
        x = document.getElementById("newTask");
        newTask = newTask + "<td>" + x.value + "</td>";

        //Fecha de la nueva tarea (opcional)
        x = document.getElementById("fecha");
        newTask = newTask + "<td>" + x.value + "</td>";

        //Fin del renglón
        newTask = newTask + "</tr>";
        document.getElementById("tareas").innerHTML = newTask;

        //Borrar campos
        document.getElementById("newTask").value = "";
        document.getElementById("fecha").value = '';
        estilo++;

        //Para el strikethrough
        var checkboxes = document.querySelectorAll(".Check"); //Obtiene todos los checkboxes
        checkboxes.forEach(function (checkbox) { //Itera sobre cada checkbox
            checkbox.addEventListener("change", function () { //Cuando el estado del checkbox cambia, se ejecuta la función
                var row = this.closest("tr"); //Identifica el renglón que le corresponde al checkbox que cambió su estado
                if (this.checked) { //Si el checkbox está marcado
                    row.style.textDecoration = "line-through"; //Strikethrough
                } else { //Si no
                    row.style.textDecoration = "none"; //No strikethrough
                }
            });
        });
    }
}

function borrar() {
    document.getElementById("tareas").innerHTML = "";
    newTask = "<tr><th>   </th><th>TAREA</th><th>FECHA DE ENTREGA</th></tr>";
    estilo = 0;
}