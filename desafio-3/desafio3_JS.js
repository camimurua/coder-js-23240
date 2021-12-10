// DESAFIO 3

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log(" DIAS TOTALES : ");

for(let i=0; i<7; i++) {
    console.log(dias[i]);
}

//Crear un algoritmo que, dado una lista de dias, lo recorra e indique los números que son pares

//En el mismo algoritmo, antes de la condición anterior, incorporar un condicional, donde, si el dia es el número 7, imprima un alert con un mensaje personalizado.


console.log(" NUMEROS PARES : ");

for(let i=0; i<=7; i++) {

    if(i%2==0) {
        console.log(` DIA: ${dias[i]}    POSICION: ${i}`); 
    } else if(i==7) {
        alert ("EN LA POSICION 7 NO EXISTE UN DIA VALIDO");
    }
}


// Pensando el domingo como dia 7 

console.log(" NUMEROS PARES : ");

for(let i=0; i<=7; i++) {

    if(i%2==0) {
        console.log(` DIA: ${dias[i]}    POSICION: ${i}`); 
    } else if(i==7) {
        alert(` EL DIA: ${dias[i-1]}  ES EL NUMERO ${i}`);
    }
}

