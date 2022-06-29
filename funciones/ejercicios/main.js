/*
function nombre() {
    let usuario = prompt("ingrese su nombre");
    alert("hola, "+ usuario);
}
nombre();

alert("mostrar un numero")
function numero(a){
    return a;
}
alert(numero(1))


alert("funcion flecha")

const flecha = (a, b) => a + b;
alert(flecha(2, 2));

alert("funcion flecha nombre y apellido")

const nombres = (a, b) => a + b;
alert(nombres('mario ', 'benedetto'));
*/
alert("funcion flecha positivo negativo");

const posneg = (a) => {
    if (a>0){
        alert("positivo")
    }else{
        alert("negativo")
    }
}
posneg(-4);