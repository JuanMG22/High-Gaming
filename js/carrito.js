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
    $('#card-productos').fadeIn(450);
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

$('#btn-todo').click( () => {
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .ram, .fuente, .gabinetes').fadeIn(150);
});

$('#btn-amd').click( () => {
    $('.ProcesadoresAMD').fadeIn(150);
    $('.ProcesadoresIntel, .gpus, .motherboard, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-intel').click( () => {
    $('.ProcesadoresIntel').fadeIn(150);
    $('.ProcesadoresAMD, .gpus, .motherboard, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-gpu').click( () => {
    $('.gpus').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .motherboard, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-motherboard').click( () => {
    $('.motherboard').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-ram').click( () => {
    $('.ram').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-fuente').click( () => {
    $('.fuente').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .ram, .gabinetes').fadeOut(150);
});

$('#btn-gabinete').click( () => {
    $('.gabinetes').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .ram, .fuente').fadeOut(150);
});


// Función que muestra las cards con los productos disponibles
const mostrarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector(`.card-title`).textContent = producto.titulo;
        templateCard.querySelector(`.precio-producto`).textContent = producto.precio;
        templateCard.querySelector(`.card-text`).textContent = producto.descripcion;
        templateCard.querySelector(`.card-img-top`).setAttribute("src", producto.imagen);
        templateCard.querySelector(`.btn-comprar`).dataset.id = producto.id;
        templateCard.querySelector(`#producto-card`).classList.add(producto.categoria);
        const clone = templateCard.cloneNode(true);
        fragment.append(clone);
       
        filtrasClasesCategoria();
    });
    cardProductos.append(fragment);
}

const filtrasClasesCategoria = () => {
     if (
            templateCard.querySelector(`#producto-card`).classList.contains(`ProcesadoresAMD`) 
            || 
            templateCard.querySelector(`#producto-card`).classList.contains(`ProcesadoresIntel`)
            || 
            templateCard.querySelector(`#producto-card`).classList.contains(`gpus`)
            || 
            templateCard.querySelector(`#producto-card`).classList.contains(`motherboard`)
            || 
            templateCard.querySelector(`#producto-card`).classList.contains(`ram`)
            || 
            templateCard.querySelector(`#producto-card`).classList.contains(`fuente`)
            || 
            templateCard.querySelector(`#producto-card`).classList.contains(`gabinetes`)
        ) {
            templateCard.querySelector(`#producto-card`).classList.remove(
                `ProcesadoresAMD`,
                `ProcesadoresIntel`,
                `gpus`,
                `motherboard`,
                `ram`,
                `fuente`,
                `gabinetes`,
                );
        }
}


const addCarrito = e => {
    if (e.target.classList.contains(`btn-comprar`)) {
        setCarrito(e.target.parentElement);
        Swal.fire({
            toast: true,
            position: 'bottom-end',
            icon: 'success',
            title: 'Se agregó al carrito',
            showConfirmButton: false,
            timer: 2000
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
    });

    $('#btn-pedido').click(() => {
        const preloader = document.querySelector(`#loader`);
        preloader.classList.toggle(`close-loader`);
        setTimeout(() => {
                 $('.carrito-titulo').html('Ingrese sus datos')
        $('.container-carrito').html(`
        <form id="formulario" name = "formulario-pago">

              <fieldset>
            
                <div class="d-flex justify-content-center">                     
                  <div class="form__name mx-3">
                    <label class="mx-3" for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="name" placeholder="Tu nombre" maxlength = "20" required />
                    <br>
                    <br>
                    <label class="mx-3" for="apellido">Apellido</label>  
                    <input type="text" id="apellido" name="lastName" placeholder="Tu apellido" maxlength = "20" required />
                    <br>
                    <br>                 
                  </div>

                  <div class="mx-3">
                    <label class="mx-3" for="email">Email</label>                 
                    <input type="email" id="email"  name="email" placeholder="Email Address" required />
                    <br>
                    <br>
                    <label class="mx-3" for="telefono">Teléfono</label>               
                    <input type="text" id="telefono" name="telefono" placeholder="Tu número" maxlength = "10" required />                
                  </div>
                </div>
                          
                <div class="metodos-pagos text-center">
                  <br>
                  <br>
                  <label for="metodo" ><i class="fas fa-money-check-alt"></i> Métodos de pago</i></label>
                  <br>
                  <br>
                  <input type="radio" value="tarjeta" id="tarjeta" name="metodo" required>
                  <label class="mx-2" for="tarjeta"><i class="fas fa-credit-card"></i> Tarjeta de crédito/débito</label>
                  <br>
                  <br>
                  <input type="radio" value="banco" id="banco" name="metodo" required>
                  <label class="mx-3" for="banco"><i class="fas fa-university"></i> Transferencia bancaria</label>
                  <br>
                  <br>
                  <button id="btn-siguiente" class="btn btn-dark">Enviar</button>
                </div>

                          
              </fieldset>

            </form>`)
            $('#btn-siguiente').click((e) => {
                $('#formulario').submit((e)=> {
    
                    e.preventDefault()
                    Swal.fire({
                        title: `Gracias por comprar ${nombre.value}`,
                        html: `
                        <h3 class"text-dark my-3">En breve nos estaremos contactando a ${email.value}</h3>
                        <a href="./productos.html" id="btn-volver" class="btn btn-dark my-3">Volver</a>
                        `,
                        showConfirmButton: false,
                        icon: 'success',
                        width: '60%',
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        allowEnterKey: false
                    });
                    $('#btn-volver').click(() => {
                        carrito = {};
                        mostrarCarrito();
                    });
    
                })
            });
                }, 100);
        setTimeout(() => {
                 preloader.classList.toggle(`close-loader`);
                }, 200);
        


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




$('#btn-pedido').click(() => {
        console.log('hola');
    });

const btnPedido = () => {
    console.log('hola')
}