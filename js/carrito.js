const cardProductos = document.querySelector(`#card-productos`);
const items = document.querySelector(`#items`);
const footer = document.querySelector(`#footer`);
const templateCard = document.querySelector(`#template-card`).content;
const templateCarrito = document.querySelector(`#template-carrito`).content;
const templateFooter = document.querySelector(`#template-footer`).content;
const fragment = document.createDocumentFragment();
let carrito = {};




// Se utiliza fetch pora accdeder a productos.json
$(() => {
    fetchData();
    if (localStorage.getItem(`carrito`)) {
        carrito = JSON.parse(localStorage.getItem(`carrito`));
        mostrarCarrito();
    }

    $('#card-productos').fadeIn(1000);
});

$('#card-productos').click(e => {
    addCarrito(e);
});


$('#items').click(e => {
    btnAccion(e);
});


const fetchData = async () => {
    try {
        const res = await fetch('productos.json');
        const data = await res.json();
        mostrarCards(data);
    } catch (error) {
        console.log(error);
    }
}

// Función que muestra las cards con los productos disponibles
const mostrarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector(`.card-title`).textContent = producto.titulo;
        templateCard.querySelector(`.precio-producto`).textContent = producto.precio;
        templateCard.querySelector(`.card-text`).textContent = producto.descripcion;
        templateCard.querySelector(`.card-img-top`).setAttribute("src", producto.imagen);
        templateCard.querySelector(`.btn-comprar`).dataset.id = producto.id;
        const clone = templateCard.cloneNode(true);
        fragment.append(clone);
    });
    cardProductos.append(fragment);
}


const addCarrito = e => {
    if (e.target.classList.contains(`btn-comprar`)) {
        setCarrito(e.target.parentElement);
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            icon: 'success',
            title: 'Se agregó el producto',
            showConfirmButton: false,
            timer: 1500
        });
    }
    e.stopPropagation();
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(`.btn-comprar`).dataset.id,
        titulo: objeto.querySelector(`.card-title`).textContent,
        precio: objeto.querySelector(`.precio-producto`).textContent,
        cantidad: 1
    }

    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1;
    }

    carrito[producto.id] = {
        ...producto
    };
    mostrarCarrito();
}

// Función que pinta el carrito
const mostrarCarrito = () => {
    $('#items').html('');
    $('#nav-carrito').html('0');
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector(`th`).textContent = producto.id;
        templateCarrito.querySelectorAll(`td`)[0].textContent = producto.titulo;
        templateCarrito.querySelectorAll(`td`)[1].textContent = producto.cantidad;
        document.querySelector(`#nav-carrito`).textContent = producto.cantidad;
        templateCarrito.querySelector(`.btn-sumar`).dataset.id = producto.id; //btn agregar producto
        templateCarrito.querySelector(`.btn-restar`).dataset.id = producto.id; //btn quitar producto
        templateCarrito.querySelector(`span`).textContent = producto.cantidad * producto.precio;

        const clone = templateCarrito.cloneNode(true);
        fragment.append(clone);
    });

    items.append(fragment);
    mostrarFooter();

    localStorage.setItem(`carrito`, JSON.stringify(carrito));
}


const mostrarFooter = () => {
    $('#footer').html('');
    if (Object.keys(carrito).length === 0) {
        $('#footer').html(`
        <th scope="row" colspan="5">Carrito vacío</th>
        `);
        return
    }

    const nCantidad = Object.values(carrito).reduce((acumulado, {
        cantidad
    }) => acumulado + cantidad, 0);
    const nPrecio = Object.values(carrito).reduce((acumulado, {
        cantidad,
        precio
    }) => acumulado + cantidad * precio, 0);

    templateFooter.querySelectorAll(`td`)[0].textContent = nCantidad;
    document.querySelector(`#nav-carrito`).textContent = nCantidad;
    templateFooter.querySelector(`span`).textContent = nPrecio;

    const clone = templateFooter.cloneNode(true);
    fragment.append(clone);
    footer.append(fragment);

    vaciarCarrito();
}

// Funcion que vacia carrito
const vaciarCarrito = () => {

    $('#vaciar-carrito').click(() => {
        carrito = {};
        mostrarCarrito();
        // Animacion al vaciar el carrito
        $('.table').fadeOut(500);
    });

}


const btnAccion = e => {
    // Acccion de sumar un producto
    if (e.target.classList.contains(`btn-sumar`)) {
        const producto = carrito[e.target.dataset.id];
        producto.cantidad++;
        carrito[e.target.dataset.id] = {
            ...producto
        };
        mostrarCarrito();
    }
    // Acccion de restar un producto
    if (e.target.classList.contains(`btn-restar`)) {
        const producto = carrito[e.target.dataset.id];
        producto.cantidad--;
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id];
        }
        mostrarCarrito();
    }

    e.stopPropagation();
}