//constantes

const contenedorCarrito = document.querySelector('#lista-carrito tbody');

//JQUERY

$('#vaciar-carrito').click(vaciarCarrito);
$('#finalizar-compra').click(finCompra);
$('#lista-productos').click(agregarProducto);
$('#carrito').click(eliminarProducto);

//carrito vacio

let articulosCarrito = [];


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
		precio: producto.querySelector('.precio span').textContent,
		id: producto.querySelector('a').getAttribute('data-id'),
	}

	const existente = articulosCarrito.some(producto => producto.id === productoAgregado.id)

	if (existente) {
		const productos = articulosCarrito.map(producto => {

			if(producto.id === productoAgregado.id){
				Swal.fire({
					type: 'info',
					title: 'Ups...',
					text: 'El producto ya está agregado',
					showConfirmButton: false,
					timer: 1000
				})
				return producto;
			}
			else {
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
		const { imagen, nombre, precio,  id } = producto;

		const row = document.createElement('tr');
		row.innerHTML = `
			<td>
				<img src="${imagen}" width=100>
			</td>
			<td>
				${nombre}
			</td>
			<td>
				${precio}
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

function finCompra(e) {

	e.preventDefault();

		Swal.mixin({
		  input: 'text',
		  confirmButtonText: 'Siguiente',
		  confirmButtonColor: "#008891",
		  cancelButtonText: 'Cancelar',
		  showCancelButton: true,
		  progressSteps: ['1', '2', '3']
		})
			.queue([
			{
				title: 'Paso 1',
				text: 'Ingresar nombre y apellido'
			},
			{
				title: 'Paso 2',
				text: 'Ingresar dirección (GBA O CABA)'
			},
				{
				title: 'Paso 3',
				text: 'Ingresar correo electrónico'
			}      
			])
			.then((result) => {
			if (result.value) {
				Swal.fire({
				title: '¡Completado!',
				text: 'Nos estaremos comunicando con usted a la brevedad',
				confirmButtonText: 'Ok'
				})
				vaciarCarrito()	
			}
			});	

}

function borrarHTML() {
	
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}

function guardarStorage() {
	localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

$('.aclaracion p').append('<button type="button" class="btn btn-info"> PRÓXIMO SERVICIO </button>');

$('.btn').click(function(e) {

		e.preventDefault();

		$('.actualizacion').toggle('slow');

});


$(function () {

		$.ajax({
				url:'js/base.json',
				success: function(data) {
					console.log(data);

					const masServicios = data;

					masServicios.forEach( serv => {

						const { nombre, imagen, id, precio} = serv;

						$('.actualizacion').append(`

						<div class="row agregada">
							<div class="col-sm-10">  
								<div class="card" style="width: 18rem;">
									<img src="${serv.imagen}" class="img-fluid card-img-top img-agregada" alt="${serv.nombre}">
									<div class="card-body">
										<span class="card-title"> ${serv.nombre} </span>
										<p class="card-text"> Son usadas para mejorar la longitud, curvatura, cantidad y grosor de pestañas naturales.</p>
                              			<p> TIEMPO ESTIMADO: Aproximadamente 2 horas y media. </p>
										<p class="precio"> PRECIO: <span> ${serv.precio} </span> </p>
									</div>       
								</div>
							</div>
					  	</div>

						`);

						$('.btn').css("margin-left", "30%");
						$('.img-agregada').css("margin-left", "18%");
						$('.agregada').css("margin-left", "10%");
					});
				},
				error: function (xhr,status,errorThrown) {
					console.log(errorThrown);
				}
			});

});
