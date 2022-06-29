let numero = parseInt(prompt("ingrese un numero"))
let contador = 0

while (numero>=1) {
    contador=contador+1
    numero= numero /10

}
document.write(" el numero tiene ", contador , " digitos")


