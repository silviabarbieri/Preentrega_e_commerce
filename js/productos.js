 const crearHtml = (item) => {
 const html = `
            <article data-id="${item.id}">
                <img src="${item.imagen}" class="img" alt="${item.nombre}">
                <h3>${item.nombre}</h3>
                <p>${item.talle}</p>
                <p>${item.precio}</p>
                <p>${item.cuotas}</p>
                <button type="button" id="agregar">Agregar</button>
            </article>
            `;
        
        return html;
 };

  // Fetch de productos
  fetch('productos.json')
      .then(response => response.json())
      .then((array) => {
        console.log(array);
        const listaProductos = document.querySelector('#lista-productos');
        listaProductos.innerHTML = '';

       array.forEach((item) => {
        const elementos = crearHtml(item);
        console.log(elementos);
        listaProductos.innerHTML += elementos;
       });
      })
      .catch((error) => console.log(error));
        