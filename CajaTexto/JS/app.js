let btnSumar = document.getElementById("sumar");
function realizarSuma(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    //parseInt para enteros
    //parseFloat para decimales
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 + numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";
}
let btnRestar = document.getElementById("restar");
function realizarResta(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 - numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";
}

let btnMultiplicar = document.getElementById("multiplicar");
function realizarMultiplicacion(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 * numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";
}

let btnDividir = document.getElementById("dividir");
function realizarDivision(){
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let resultado = numero1 / numero2;
    let mostrarResultado = document.getElementById("mostrarResultado");
    mostrarResultado.innerHTML = "<p>El resultado es: " + resultado + "</p>";
}

btnSumar.addEventListener("click",realizarSuma);
btnRestar.addEventListener("click",realizarResta);
btnMultiplicar.addEventListener("click",realizarMultiplicacion);
btnDividir.addEventListener("click",realizarDivision);
