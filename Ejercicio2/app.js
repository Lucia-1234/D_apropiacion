//calcular precio de entradas al cine 
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

//variable para solicitar la edad de la persona y preguntar si es estudiante
let edad = parseInt(prompt("ingrese su edad: "));
let estudiante  = prompt("¿Es estudiante?: ");

//si tiene menos de 12 años el costo de la entrada es 5000 y es estudiante obtiene 20% de descuento
if (edad < 12 && estudiante=="si"){
    console.log("Costo entrada: 5000");
    console.log("Obtiene 20% de descuento");
    console.log(`debe pagar: ${5000*0.20}`);
}

//si tiene entre 12 y 18 años el valor es 8000 y es estudiante obtiene 20% de descuento
if (edad >=12 && edad <=18 && estudiante=="si"){
    console.log("Costo entrada: 8000");
    console.log("Obtiene 20% de descuento");
    console.log(`debe pagar: ${8000*0.20}`);
}

//si es mayor de 18 el valor es 10000 y es estudiante obtiene 20% de descuento
if (edad >18 && estudiante=="si"){
    console.log("Costo entrada: 10000");
    console.log("Obtiene 20% de descuento");
    console.log(`debe pagar: ${10000*0.20}`);
}

//si es menor de 12 años y no es estudiante
if (edad < 12 && estudiante=="no"){
    console.log("Costo entrada: 5000");
    console.log("no obtiene descuento")
}

//si esta entre 12 y 18 y no es estudiante
if (edad >=12 && edad <=18 && estudiante=="no"){
    console.log("Costo entrada: 8000");
    console.log("no obtiene descuento")
}

//es mayor de 18 y no es estudiante
if (edad >18 && estudiante=="no"){
    console.log("Costo entrada: 10000");
    console.log("no obtiene descuento")
}