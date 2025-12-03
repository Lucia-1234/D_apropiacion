//clasificacion de numeros 
import prompt_sync from "prompt-sync";
const prompt= prompt_sync();

//se solicita el nombre al usuario
let numero = parseFloat(prompt("Ingrese un numero: "));

//si el numero es igual a 0
if (numero == 0){
    console.log("Cero");
}

//si el numero es menor que 0
if (numero < 0){
    console.log("Numero negativo");
}

//si el numero es mayor a 0
if (numero > 0){
    console.log("Numero positivo");
}

//si el numeor es par o impar 
if (numero % 2 === 0){
    console.log(`El número ${numero} es par`);
}else {
    console.log(`el número ${numero} es impar`);
}