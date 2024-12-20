document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el carrito en localStorage si no existe
  if (!localStorage.getItem('carrito')) {
    console.log('Inicializando carrito...');
    localStorage.setItem('carrito', JSON.stringify([])); // Carrito vacío
    console.log('Carrito inicializado.');
  } else {
    console.log('Carrito ya existente:', localStorage.getItem('carrito'));
  }

  // Llamar a la función para cargar productos
  cargarProductos();
});
   





// Función para cargar productos
async function cargarProductos() {
  try {
    const respuesta = await fetch('productos.json');
    const productos = await respuesta.json();
    mostrarProductos(productos);
  } catch (error) {
    console.error('Error al cargar los productos:', error);
  }
}

// Función para mostrar productos
function mostrarProductos(productos) {
  const listaProductos = document.querySelector('.lista-productos');
  listaProductos.innerHTML = ''; 

  productos.forEach(producto => {
    const productCard = `
      <div class="producto" data-id="${producto.id}">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.talle}</p>
        <p>${producto.precio}</p>
        ${producto.descuento ? `<p>${producto.descuento}</p>` : ''}
        <p>${producto.cuotas}</p>
        <button class="agregar-carrito">Agregar al carrito</button>
      </div>
    `;
    listaProductos.innerHTML += productCard;
  });

  // Agregar eventos a los botones
  document.querySelectorAll('.agregar-carrito').forEach(boton => {
    boton.addEventListener('click', agregarAlCarrito);
  });
}

// Función para agregar productos al carrito
function agregarAlCarrito(event) {
  const productoId = event.target.parentElement.getAttribute('data-id');
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const producto = {
    id: productoId,
    nombre: event.target.parentElement.querySelector('h3').textContent,
    precio: event.target.parentElement.querySelector('p:nth-of-type(2)').textContent,
    imagen: event.target.parentElement.querySelector('img').src,
  };

  carrito.push(producto);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  alert(`${producto.nombre} se ha agregado al carrito.`);
}
