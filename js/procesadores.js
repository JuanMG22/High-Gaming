import { mostrarCards, carrito } from "./carrito.js";

$(() => {
    fetchData("procesadores");
    if (localStorage.getItem(`carrito`)) {
        carrito = JSON.parse(localStorage.getItem(`carrito`));
        mostrarCarrito();
    }

    $('#card-productos').fadeIn(1000);
});

const fetchData = async (categoriaTexto) => {
    try {
        const res = await fetch('productos.json');
        const data = await res.json();
        const categoria = data.filter(producto => producto.categoria === categoriaTexto)
        mostrarCards(categoria);
        
    } catch (error) {
        console.log(error);
    }
}

