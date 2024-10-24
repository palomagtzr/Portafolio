function registro() {
    //Nombre
    x = document.getElementById("name").value;
    //Mail
    x += "<br>" + document.getElementById("mail").value;
    //Edad
    x += "<br>" + document.getElementById("age").value + " años";
    console.log(x);
    //Género
    if (document.getElementById("male").checked) {
        x += "<br>Hombre";
    } else if (document.getElementById("female").checked) {
        x += "<br>Mujer";
    } else {
        x += "<br> No Binario";
    }
    //Fecha de nacimiento
    x += "<br>Nació el " + document.getElementById("birth").value;
    x += "<br>Su color favorito es el " + document.getElementById("colour").value;
    console.log(x);

    document.getElementById("res").innerHTML = x;
}