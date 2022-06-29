let nota1= parseInt(prompt("ingrese la primer nota"));
let nota2= parseInt(prompt("ingrese la segunda nota"));
let nota3= parseInt(prompt("ingrese la tercer nota"));



let suma = nota1+nota2+nota3;
promedio= suma/3;

document.write(nota1);
document.write('<br>');
document.write(nota2);
document.write('<br>');
document.write(nota3);
document.write('<br>');
document.write("la suma de las notas es: ", suma);
document.write('<br>');
document.write("el promedio de las notas es: ", promedio);
document.write('<br>');
document.write('<br>');



if (promedio>7) {
    document.write("El alumno esta promocionado");
    document.write('<br>');
} else if (promedio<7){
    document.write("el alumno no promociono");
    document.write('<br>');
}

if (promedio>4)  {
    document.write("el alumno es alumno regular");
    document.write('<br>');
}else if (promedio<4) {
    document.write("el alumno esta reprovado");
    document.write('<br>');
}





