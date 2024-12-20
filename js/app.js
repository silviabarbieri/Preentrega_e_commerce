
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// console.log(carrito, typeof carrito);
const { id, nombre, precio } = productos[1];
// console.log(id, nombre, precio)
const producto = {
  id: id,
  nombre: nombre,
  precio: precio,
  cantidad: 1,
};
console.log(producto);
carrito.push(producto);
console.log(carrito);
localStorage.setItem("carrito", JSON.stringify(carrito));

  
 
