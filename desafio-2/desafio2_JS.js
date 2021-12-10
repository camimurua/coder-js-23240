
//VARIANTE 1
let NUM = prompt (" Ingresar número : ");

console.log("Prueba de primera variante");
console.log("Numero ingresado " + NUM);

if (Number(NUM) >= 1000) {
    if (Number(NUM) > 1000) {
        alert ("EL NÚMERO INGRESADO ES MAYOR A 1000");
    } else {
        alert ("EL NÚMERO INGRESADO ES  1000");
    }   
} else {
    alert ("EL NÚMERO INGRESADO ES MENOR A 1000");
}

//VARIANTE 2
let TEXTO = prompt (" Ingresar la palabra Hola : ");

console.log("Prueba de segunda variante");
console.log("Texto ingresado " + TEXTO);

if (TEXTO == "Hola") {
    alert ("Hola, ten un buen dia !");
}

//VARIANTE 3
let NUM2 = prompt (" Ingresar otro número : ");

console.log("Prueba de tercera variante");
console.log("Numero ingresado " + NUM2);

if (Number(NUM2) > 10 && Number(NUM2) < 50) {
    alert ("EL NÚMERO INGRESADO SE ENCUENTRA ENTRE 10 Y 50");
} else {
    alert ("EL NÚMERO INGRESADO NO SE ENCUENTRA ENTRE 10 Y 50");
}