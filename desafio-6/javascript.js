const servicios = [
    {nombre: "Estructura en gel", precio: "$650"},
    {nombre: "Estructura en acrílico", precio: "$680"},
    {nombre: "Esmaltado semipermanente", precio: "$450"},
    {nombre: "Kapping gel", precio: "$500"},
];

let carrito = [];

console.table(servicios);

const servicio2 = [
    {nombre: "Belleza de pies", precio: "$400"}
];

const serviciofin = [...servicios, ...servicio2];

console.table(serviciofin);

const longitud = serviciofin.length;

console.log(longitud);

serviciofin.push({nombre: "Esmaltado común", precio: "$350"});

console.table(serviciofin);

console.log(servicios[3].precio);

const eliminado = serviciofin.pop();
console.log(eliminado);