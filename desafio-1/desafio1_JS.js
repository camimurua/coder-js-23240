let nombre = prompt (" Ingresar Nombre : ");
let fecha1 = prompt (" Ingresar año de nacimiento : ");
let fecha2 = 2020;


console.log ("Primer prueba de JavaScript");
console.log (" Hola " + nombre + " !");
console.log ("Año de nacimiento : " + Number(fecha1));
console.log ("Año actual :" + fecha2);

let resultado = (fecha2 - fecha1);

console.log (" Edad : " + resultado);

alert (" Hola " + nombre + " ! Tu edad es : " + resultado );