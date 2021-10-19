const carritoDeCompras = []; //Creo un array vacío, donde despues agrego los productos
const precios = []; //Creo un array vacio donde se ingresarán precios de los productos
const precioTotal = (previousValue, currentValue) => previousValue + currentValue;

// Funcion para agregar productos
function agregarCpu(nombre, precio) {
    carritoDeCompras.push(nombre);
    alert(`Se agregó el producto`);
    return precios.push(precio);
}


// Función que muestracon un alert el precio total 
function mostrarCarrito() {
    for (let index = 0; index < carritoDeCompras.length; index++) {
        iCarrito = carritoDeCompras[index];
        console.log(`${iCarrito}`)
    }

    if (precios.length > 1) {
        alert(`El precio total de la compra es de $ ${precios.reduce(precioTotal)}\nLista de productos en consola`);
        return precioTotal;
    } else {
        alert("No se ingresó ningún producto")
    }
}

// Funcio que vacia el carrito por medio de un splice
function limpiarCarrito() {
    largoPrecios = precios.length; //Hallo el largo del array precios
    alert(`Se vacio el carrito`);
    return precios.splice(0, largoPrecios);
}