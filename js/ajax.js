//Declaramos la url que vamos a usar para el GET
const URLJSON = "../productos.json"
//Agregamos un botón con jQuery
$("#lista-productos").append('<button id="btn1" class="btn btn-dark my-5">Mostrar Lista</button>');
//Escuchamos el evento click del botón agregado
$("#btn1").click(() => {
    $.get(URLJSON, function (respuesta, estado) {
        if (estado === "success") {
            let misDatos = respuesta;
            for (const dato of misDatos) {
                $("#lista-productos").append(`
                <table class="table table-dark table-striped table-hover">
                    <thead>
                        <tr>
                        <th scope="col m-0">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">${dato.id}</th>
                        <td><img style="width: 5%" src=".${dato.imagen}"> ${dato.titulo}</td>
                        <td>$ ${dato.precio}</td>
                        </tr>
                    </tbody>
                    </table>
                `);
            }
        }
    });
});