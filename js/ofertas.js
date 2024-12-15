const crearHtml = (item) => {
    const html = `
             <article data-id="${item.id}"> 
                   <p class="off">${item.descuento} </p>
                   <img src="${item.imagen}" class="img" width= "180px" alt="${item.nombre}">
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

        const tresProductos = [array[0], array[3],array[4]]; 

        const fragmento = tresProductos.map((item) => crearHtml(item)).join('');
        listaProductos.innerHTML = fragmento;
    })
    .catch((error) => console.error('Error al cargar los productos:', error));
