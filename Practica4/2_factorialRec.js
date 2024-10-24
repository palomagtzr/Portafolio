function leer() {
    const valor = document.getElementById("num").value;
    const n = parseInt(valor);
    if (isNaN(n) || n < 0) {
        alert("ERROR! Debes introducir un número");
    }
    console.log(n);
    f = factorialRec(n);
    const salida = n + "! = " + f;
    document.getElementById("res").innerHTML = salida;
}
function factorialRec(x) {
    if (x == 0 || x == 1) {
        return 1;
    } else {
        console.log(x * factorialRec(x - 1));
        return x * factorialRec(x - 1);
    }
}
function borrar() {
    // innerHTML = funciona para párrafos
    // value = funciona para inputs
    document.getElementById("res").innerHTML = "";
    document.getElementById("num").value = "";
    console.log("Borrado");
}