let dia = prompt("Ingrese el dia")
let mes = prompt("ingrese un mes")
let año = prompt("ingrese un año")

document.write("la fecha ingresada es: ", dia,"/",mes,"/",año)
document.write('<br>')

if (dia==25 && año ==12){
    document.write(" la fecha ingresada corresponde a navidad")

}else {
    document.write("la fecha ingresada no corresponde a navidad")
}

