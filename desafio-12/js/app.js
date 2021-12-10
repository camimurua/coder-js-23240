//constantes

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaProductos = document.querySelector('#lista-productos');
//const vaciarCarritoS = document.querySelector('#vaciar-carrito');

//JQUERY

$('#vaciar-carrito').click(vaciarCarrito);

//carrito vacio

let articulosCarrito = [];


//eventos

listaProductos.addEventListener('click', agregarProducto);
carrito.addEventListener('click', eliminarProducto);
//vaciarCarritoS.addEventListener('click', vaciarCarrito);

//local storage

document.addEventListener('DOMContentLoaded', () => {
	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

	insertarCarrito();
})


//funciones

function agregarProducto(e) {
	e.preventDefault();
	
	if (e.target.classList.contains("agregar-carrito")) {
		const productoSeleccionado = e.target.parentElement.parentElement;
		obtenerDatosProducto(productoSeleccionado);
	};

}

function obtenerDatosProducto(producto) {

	const productoAgregado = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('span').textContent,
		precio: producto.querySelector('.precio').textContent,
		id: producto.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	}

	const existente = articulosCarrito.some(producto => producto.id === productoAgregado.id)

	if (existente) {
		const productos = articulosCarrito.map(producto => {
			if (producto.id === productoAgregado.id) {
				producto.cantidad++;
				return producto;
			} else {
				return producto;
			}
		});
		articulosCarrito = [...productos];
	} else {
		articulosCarrito = [...articulosCarrito, productoAgregado];
	}
	
	insertarCarrito();
}

function insertarCarrito() {

 	borrarHTML(); 

	articulosCarrito.forEach(producto => {
		const { imagen, nombre, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width=50>
			</td>
			<td>
				${nombre}
			</td>
			<td>
				${precio}
			</td>
			<td>
				${cantidad}
			</td>
			<td>
				<a href="#" class="borrar-producto" data-id="${id}"> X </a>
			</td>
			
		`
		contenedorCarrito.appendChild(row);
	});

	guardarStorage();
}

function eliminarProducto(e) {

	if (e.target.classList.contains('borrar-producto')) {

		const productoId = e.target.getAttribute('data-id');

		articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

		insertarCarrito();

		guardarStorage();
	}
}

function vaciarCarrito() {
	borrarHTML();
	articulosCarrito = [];
	guardarStorage();
}

function borrarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// JQUERY 

$('.aclaracion').prepend('<p class="borrado"> TEXTO AGREGADO CON JQUERY </p>');

$('.aclaracion').append('<button type="button" class="btn btn-info"> BORRAR / MOSTRAR </button>');

$('.btn').click(function() {
		$('.borrado').toggle('slow');
});
