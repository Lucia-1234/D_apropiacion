//Acceso a un sistema
import prompt_sync from "prompt-sync";
const prompt = prompt_sync();

//constantes con los datos que el usuario debe ingresar para realizar la verificacion
const nombre = "admin"
const password = 1234

//variable que solicita el nombre del usuario 
let nombre_usuario = prompt("Ingrese el nombre de usuario: ");

//variable que solicita la contraseña del usuario 
let contraseña =parseInt(prompt("Ingrese la contraseña: "));

if (nombre_usuario==nombre && contraseña==password){
    console.log("Acceso permitido")
}else
    console.log("Acceso denegado")