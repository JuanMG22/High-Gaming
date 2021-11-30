const mostrarFormularioPago = () => {
    $('.carrito-titulo').html('Ingrese sus datos')
            $('.container-carrito').html(`
            <form id="formulario" name = "formulario-pago">
            
            <div class="form-floating my-2 mx-1">
              <input type="text" class="form-control" id="nombre" placeholder="Password" required>
              <label for="nombre">Nombre</label>
            </div>

            <div class="form-floating my-2 mx-1">
              <input type="text" class="form-control" id="apellido" placeholder="Password" required>
              <label for="apellido">Apellido</label>
            </div>
            <div class="form-floating my-2 mx-1">
              <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
              <label for="email">Email</label>
            </div>
            <div class="form-floating my-2 mx-1">
              <input type="number" class="form-control" id="telefono" placeholder="Password" required>
              <label for="telefono">Telefono</label>
            </div>

            <h4 class="d-flex justify-content-center mt-3 text-black-50" ><i class="fas fa-money-check-alt mx-2"></i>Métodos de pago</i></h4>
            <div class="form-check d-flex justify-content-center my-3  text-black-50">
              <input class="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label" for="flexRadioDefault1">
              <i class="fas fa-credit-card"></i> Tarjeta de crédito/débito
              </label>
            </div>
            <div class="form-check d-flex justify-content-center my-3 text-black-50">
              <input class="form-check-input mx-2" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
              <label class="form-check-label" for="flexRadioDefault2">
               <i class="fas fa-university"></i> Transferencia bancaria
              </label>
            </div>
            <div class=" d-flex justify-content-center my-3 text-black-50">
              <button id="btn-siguiente" class="btn btn-dark">Enviar</button>
            </div>

            </form>`)
}

export { mostrarFormularioPago }