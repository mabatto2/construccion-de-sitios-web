let nombre= prompt("ingrese el nombre del postulante");
document.write("nombre: ", nombre)
document.write('<br>');

let preguntas= parseInt(prompt("ingrese el total de preguntas realizadas"));
document.write("Preguntas realizadas: ", preguntas);
document.write('<br>');

let contestadas= parseInt(prompt("ingrese el total de pretguntas contestadas correctamente"));
document.write("Contestadas Correctamente: ", contestadas);
document.write('<br>');

total = (contestadas * 100) / preguntas
parseFloat(total)
document.write("el promedio total es: ", total)

document.write('<br>');

if (total>=90) {
    document.write("El postulante es de nivel superior")
} else {
    if(total >=75 && total > 90){
        document.write("El postulante es de nivel medio")

    }else {
        if(total >=50 && total > 75){
            document.write("El postulante es de nivel regular")
    
        }else {
            if(total >50){
                document.write("El postulante esta fuera de nivel")
        
            }
        }
    }
}