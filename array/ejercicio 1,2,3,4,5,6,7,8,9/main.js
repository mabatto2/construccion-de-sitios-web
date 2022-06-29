const alumnos = [];

for(let i=1;i<=5;i++){
    alumnos[i]=prompt("ingrese un alumno")
    var ultimo = alumnos[alumnos.length-1]
}

console.log(alumnos)
console.log("el ultimo alumno es ", ultimo )
document.write(alumnos)
document.write('<br>')
document.write("el ultimo alumno es ", ultimo)
document.write('<br>')


//editar un elemento

document.write('<br>')
let denuevo = prompt("ingrese el nuevo nombre")
const modifico = alumnos.splice(3, 1, denuevo)
document.write("El alumno modificado es: ", modifico)
document.write('<br>')
console.log("modificado: ", modifico)
document.write('<br>')
document.write('<br>')
document.write(alumnos)
console.log(alumnos)
document.write('<br>')
//agregar un elemento
document.write('<br>')
let nuevo = prompt("ingrese un alumno nuevo")
alumnos.push(nuevo)
alert("se ingreso el sigueinte alumno: "+ nuevo)
document.write('<br>')

document.write('<br>')
document.write(alumnos)
console.log(alumnos)


// eliminar el ultimo.

document.write('<br>')
const elimino = alumnos.pop(alumnos.length-1)
document.write("el alumno eliminado es:", elimino)
document.write('<br>')
document.write(alumnos)
console.log(alumnos)
document.write('<br>')
document.write('<br>')

//agregar al principio el eliminado

document.write(alumnos)
console.log(alumnos)
document.write('<br>')
document.write('<br>')
alumnos.unshift(elimino)
document.write(alumnos)
console.log(alumnos)
document.write('<br>')
document.write('<br>')

// eliminar el primero

alumnos.shift()
document.write(alumnos)
console.log(alumnos)
document.write('<br>')
document.write('<br>')

// concatenar 2 array

const ingresantes2023 = [];

for(let i=1;i<=3;i++){
    ingresantes2023[i]=prompt("ingrese un alumno")
}
const añonuevo = alumnos.concat(ingresantes2023)
document.write("añonuevo")
document.write('<br>')
document.write(añonuevo)
console.log(añonuevo)
document.write('<br>')
document.write('<br>')

// ordenados alfabeticamente

añonuevo.sort()
document.write("añonuevo")
document.write('<br>')
document.write(añonuevo)
console.log(añonuevo)
document.write('<br>')
document.write('<br>')


