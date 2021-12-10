//constantes

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const listaProductos = document.querySelector('#lista-productos');
const vaciarCarritoS = document.querySelector('#vaciar-carrito');

//carrito vacio

let articulosCarrito = [];


//eventos

listaProductos.addEventListener('click', agregarProducto);
carrito.addEventListener('click', eliminarProducto);
vaciarCarritoS.addEventListener('click', vaciarCarrito);


//funciones

function vaciarCarrito() {
 	borrarHTML();
 	articulosCarrito = [];
 	guardarStorage();
}

function agregarProducto(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const productoSeleccionado = e.target.parentElement.parentElement;
		obtenerDatosProducto(productoSeleccionado);
	};
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

function obtenerDatosProducto(producto) {

	const productoAgregado = {
		imagen: producto.querySelector('img').src,
		nombre: producto.querySelector('.card-title').textContent,
		precio: producto.querySelector('.precio li').textContent,
		id: producto.querySelector('data-id'),
		cantidad: 1
	}

	insertarCarrito();
}

function insertarCarrito() {
 	borrarHTML();

	articulosCarrito.forEach(producto => {
		const { servicio, imagen, precio, cantidad, id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width=100>
			</td>
			<td>
				${servicio}
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

function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function borrarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}