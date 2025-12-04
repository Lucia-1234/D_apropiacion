//Sistema de calificaciones con condiciones logicas
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

//se solicita las notas de los estudiantes  y porcentaje de asistecia
let nota = parseFloat(prompt("Cual es la nota del estudiante: "));
let asistencia = parseFloat(prompt("Ingrese el porcentaje de asistencias del estudiante: "));

//condicion para comprobar si el estudiante cumple las dos condiciones y aprueba o no
if(nota>=60 && asistencia >=80){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}