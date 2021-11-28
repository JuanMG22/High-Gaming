const mostrarCarritoNav = () => {
    $('#nav-carrito').html('0');

    const nCantidad = Object.values(carrito).reduce((acumulado, {
        cantidad
    }) => acumulado + cantidad, 0);
    
    document.querySelector(`#nav-carrito`).textContent = nCantidad;
}


if (localStorage.getItem(`carrito`)) {
        carrito = JSON.parse(localStorage.getItem(`carrito`));
        mostrarCarritoNav();
    }
