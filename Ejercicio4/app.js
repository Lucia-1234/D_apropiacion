//menu de opciones 
import prompt_sync from "prompt-sync";
const prompt= prompt_sync();

//menu
console.log("\n 1. Consultar saldo\n 2. Retirar dinero\n 3. Depositar dinero\n 4. Salir")

//variable para preguntar la opcion del menu que se requiere 
let opcion=parseInt(prompt("Seleccione una opcion: "));

// se realiza un switch con 4 case 
switch (opcion){
    // ingresa a la opcion uno y muestra el saldo
    case 1:
        console.log("Su saldo es de: 20.000");
        break

    //ingresa a la opcion 2 y solicita el monto de dinero a retirar
    case 2:
        let retiro = parseFloat(prompt("ingrese el monto de dinero que va a retirar: "))
        console.log("Dinero retirado exitosamente")
        break

    //ingresa a la opcion 3 y solicita el monto de dinero a depositar 
    case 3:
        let deposito = parseFloat(prompt("ingrese el monto de dinero que va a depositar: "))
        console.log("Dinero depositado exitosamente")
        break

    // finaliza el programa
    case 4:
        break
}