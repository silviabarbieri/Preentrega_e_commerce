
document.addEventListener('DOMContentLoaded', () => {
  mostrarCarrito();
});

function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedorCarrito = document.querySelector('.lista-carrito');

  contenedorCarrito.innerHTML = ''; // Limpia el contenido previo

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = '<p>El carrito está vacío.</p>';
    return;
  }

  carrito.forEach(producto => {
    const productoHTML = `
      <div class="producto-carrito">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
      </div>
    `;
    contenedorCarrito.innerHTML += productoHTML;
  });

  // Agregar eventos a los botones de eliminar
  document.querySelectorAll('.eliminar-producto').forEach(boton => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}

function eliminarDelCarrito(event) {
  const productoId = event.target.getAttribute('data-id');
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Filtrar el carrito para eliminar el producto seleccionado
  carrito = carrito.filter(producto => producto.id !== productoId);

  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito(); // Actualizar el contenido del carrito en la página
}


function mostrarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
  const contenedorCarrito = document.querySelector('.lista-carrito');
  contenedorCarrito.innerHTML = ''; // Limpia el contenido previo

  if (carrito.length === 0) {
    contenedorCarrito.innerHTML = '<p class="vacio">El carrito está vacío.</p>';
    actualizarResumen(0, 0); // Resumen vacío
    return;
  }

  carrito.forEach(producto => {
    const productoHTML = `
      <div class="producto-carrito">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio}</p>
        <button class="eliminar-producto" data-id="${producto.id}">Eliminar</button>
      </div>
    `;
    contenedorCarrito.innerHTML += productoHTML;
  });

  // Actualizar el resumen
  const totalCantidad = carrito.length;
  const totalPrecio = carrito.reduce((sum, producto) => {
    const precio = parseFloat(producto.precio.replace('$', '').replace(',', ''));
    return sum + precio;
  }, 0);

  actualizarResumen(totalCantidad, totalPrecio);

  // Agregar eventos a los botones de eliminar
  document.querySelectorAll('.eliminar-producto').forEach(boton => {
    boton.addEventListener('click', eliminarDelCarrito);
  });
}

// Función para actualizar el resumen del carrito
function actualizarResumen(cantidad, total) {
  document.getElementById('cantidad-productos').textContent = `Cantidad de productos: ${cantidad}`;
  document.getElementById('total-precio').textContent = `Total a pagar: $${total.toLocaleString()}`;
}

function finalizarCompra() {
  const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  if (carrito.length === 0) {
    alert('El carrito está vacío. Agrega productos antes de finalizar la compra.');
    return;
  }

  const confirmacion = confirm('¿Deseas finalizar tu compra?');
  if (confirmacion) {
    localStorage.removeItem('carrito'); // Limpia el carrito
    alert('¡Gracias por tu compra! Tu pedido se ha procesado con éxito.');
    mostrarCarrito(); // Actualiza la vista del carrito
  }
}
// Asignar evento al botón "Finalizar Compra"
document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);

