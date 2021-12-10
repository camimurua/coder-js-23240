const jugadores = ["Jugador 1", "Jugador 2"];

let tematica1 = [
    {pregunta1: [1,2,3]},
    {pregunta2: [1,2,3]},
    {pregunta3: [1,2,3]},
    {pregunta4: [1,2,3]},
    {pregunta5: [1,2,3]}
];

let tematica2 = [
    {pregunta1: [1,2,3]},
    {pregunta2: [1,2,3]},
    {pregunta3: [1,2,3]},
    {pregunta4: [1,2,3]},
    {pregunta5: [1,2,3]}
];

let tematica3 = [
    {pregunta1: [1,2,3]},
    {pregunta2: [1,2,3]},
    {pregunta3: [1,2,3]},
    {pregunta4: [1,2,3]},
    {pregunta5: [1,2,3]}
];

let tematica4 = [
    {pregunta1: [1,2,3]},
    {pregunta2: [1,2,3]},
    {pregunta3: [1,2,3]},
    {pregunta4: [1,2,3]},
    {pregunta5: [1,2,3]}
];

let tematica5 = [
    {pregunta1: [1,2,3]},
    {pregunta2: [1,2,3]},
    {pregunta3: [1,2,3]},
    {pregunta4: [1,2,3]},
    {pregunta5: [1,2,3]}
];

let tematica6 = [
    {pregunta1: [1,2,3]},
    {pregunta2: [1,2,3]},
    {pregunta3: [1,2,3]},
    {pregunta4: [1,2,3]},
    {pregunta5: [1,2,3]}
];

let juego = [];

/*let jugador = prompt("Hola, elegí tu jugador (1 o 2) :");*/
console.log("buena suerte ${jugador} !");

console.table(tematica1);
console.table(tematica2);
console.table(tematica3);
console.table(tematica4);
console.table(tematica5);
console.table(tematica6);

console.table(jugadores);

/*----- CAMBIO PARA DESAFIO 8: DOM -------*/

const sectionInfo = document.querySelector('#info');

/*const texto = prompt("Ingrese texto a agregar: ");*/

const agregado =  document.createElement('p');

agregado.textContent = texto;

sectionInfo.appendChild(agregado);

agregado.classList.add('page-section','text-center');

/*  Desafío 9 : */


document.querySelectorAll("#boton").addEventListener("click", cambiarFondo);

function cambiarFondo() {
    document.querySelectorAll("#boton").style.backgroundColor = "orange";
} ;

document.querySelectorAll("inputTeclado").addEventListener("keyup", nombreJugador);

function nombreJugador() {
    document.querySelectorAll("h3").textContent = "Nombre Guardado";
}


//no se porque motivo o que estoy poniendo mal pero no funciona ninguno 



