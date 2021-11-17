const mostrarCarrito = () => {
    $('#nav-carrito').html('0');

    const nCantidad = Object.values(carrito).reduce((acumulado, {
        cantidad
    }) => acumulado + cantidad, 0);
    
    Object.values(carrito).forEach(producto => {
        document.querySelector(`#nav-carrito`).textContent = producto.cantidad;
    });

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = {
        ...producto
    };

    

}


if (localStorage.getItem(`carrito`)) {
        carrito = JSON.parse(localStorage.getItem(`carrito`));
        mostrarCarrito();
    }
