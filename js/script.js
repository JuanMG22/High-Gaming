let carritoDeCompras = []; //Creo un array vacío, donde despues agrego los productos
let precios = []; //Creo un array vacio donde se ingresarán precios de los productos
const precioTotal = (previousValue, currentValue) => previousValue + currentValue;

// Botones
const botonComprar1 = document.querySelector(`#btnComprar1`);
const botonComprar2 = document.querySelector(`#btnComprar2`);
const botonComprar3 = document.querySelector(`#btnComprar3`);
const botonComprar4 = document.querySelector(`#btnComprar4`);

const botonMostrar = document.querySelector(`#btnMostrar`);
const botonLimpiar = document.querySelector(`#btnLimpiar`);

// Lista de productos
const listaTitulo = document.querySelector(`#carritoTitulo`);
const listaProductos = document.querySelector(`#carritoProductos`);
let li;
const listaTotal = document.querySelector(`#carritoTotal`);

// Eventos
botonComprar1.addEventListener("click", () => {
    agregarCpu(`AMD Ryzen 5 2600`, 27030);
});

botonComprar2.addEventListener("click", () => {
    agregarCpu(`AMD Ryzen 5 3500X`, 28930);
});

botonComprar3.addEventListener("click", () => {
    agregarCpu(`AMD Ryzen 5 5950X`, 90330);
});

botonComprar4.addEventListener("click", () => {
    agregarCpu(`AMD Ryzen 5 3950X`, 115730);
});

botonMostrar.addEventListener("click", () => {
    mostrarCarrito();
});

botonLimpiar.addEventListener("click", () => {
    limpiarCarrito();
});


// Funcion para agregar productos
const agregarCpu = (nombre, precio) => {
    carritoDeCompras.push(nombre);
    alert(`Se agregó el producto`);
    return precios.push(precio);
}


// Función que muestra carrito con precio total y productos ingresados en un li
const mostrarCarrito = () => {
    for (const producto of carritoDeCompras) {
        li = document.createElement("li")
        li.innerHTML = producto;
        listaProductos.appendChild(li);
    }
    if (precios.length > 0) {
        listaTitulo.textContent = (`Carrito de Compras`);
        listaTotal.textContent = (`El precio total de la compra es de $ ${precios.reduce(precioTotal)}`);
        return precioTotal;
    } else {
        alert("No se ingresó ningún producto")
    }
}

// Funcion que vacia el carrito
const limpiarCarrito = () => {
    precios = [];
    carritoDeCompras = [];
    listaTitulo.textContent = (``);
    listaTotal.textContent = (``);
    listaProductos.parentNode.removeChild(listaProductos);
    location.reload();
    alert(`Se vacio el carrito`);

}