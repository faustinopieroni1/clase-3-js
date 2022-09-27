//Ciclos=Bucleas=Iteraciones



// ---Ciclo "For"
// 0 al 10

/* for (let i = 0; i <= 10; i = i + 1) {

    alert("El numero ingresado es = " + i)

} */

// Ciclo "For" + Sentencia Break --> Finaliza el bucle en donde el  condicional indique 
// 0 al 9

/* for (let i = 0; i < 10; i = i + 1) {

    console.log(i)

    alert ( "el numero es " + i)

    if (i == 5){
        break
    }
}

console.log("Este es el fin") */

// Ciclo "For" + sentencia continue --> Saltea el valor indicado en el condicional
// 0 al 9

/* for (let i = 0; i < 10; i = i + 1) {

    if (i == 5) {
        continue
    }

// Se respeta el orden de cascada, por lo que primero debe ejecutarse lo que se debe SALTEAR y luego los demas comandos

    alert("el numero es " + i)

    console.log(i)
}

console.log("Este es el fin") */



// ---Ciclo While
// Ciclo infinito

/* let numero = 1

while (numero == 1){

    console.log ("Este es un bucle condicional infinito")

} */

// Ciclo con final --> Le doy la oportunidad al usuario de volver siempre al menu para que ingrese opcion ESC y termine la ejecucion.

/* let entrada = prompt ("Seleccione la operacion: \n1-Caja de ahorro \n2-Saldos \n3-Otras consultas \nESC-Salir")

while (entrada != "ESC"){

    alert ("El usuario ingreso la operacion: " + entrada)

    //Volvemos a solicitar un dato y si quiere salir puede tocar ESC

    entrada = prompt ("Seleccione la operacion: \n1-Caja de ahorro \n2-Saldos \n3-Otras consultas \nESC-Salir")

} */



// --- Ciclo do while
//Para que el ciclo se repita, la condicion es que i < 3
//Aca no se cumple por ende se ejecutara 1 sola vez por el "do"

let i = 7

do {
    console.log("se ejecuta 1 sola vez por que la condicion es que i sea menor a 3")
}
while (i < 3)