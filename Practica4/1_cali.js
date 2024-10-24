
function cali() {
    c = parseInt(document.getElementById("cal").value);
    console.log(c); //Print en consola
    e = " ";

    if (c < 0 || c > 10) {
        alert("ERROR! La calificación debe estar dentro del rango 0-10");
        e = "ERROR";
    } else if (c >= 0 && c < 6) {
        e = "NA";
    } else if (c >= 6 && c < 7.5) {
        e = "S";
    } else if (c >= 7.5 && c < 9) {
        e = "B";
    } else if (c >= 9 && c < 10) {
        e = "MB";
    } else if (c == 10) {
        e = "LAP";
    } else {
        alert("ERROR! Ingresa una calificación");
    }
    document.getElementById("res").innerHTML = e;
}

function borrar() {
    // innerHTML = funciona para párrafos
    // value = funciona para inputs
    document.getElementById("res").innerHTML = " ";
    document.getElementById("cal").value = " ";
    console.log("Borrado");
}