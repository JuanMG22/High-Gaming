const mostrarFormularioPago = () => {
    $('.carrito-titulo').html('Ingrese sus datos')
            $('.container-carrito').html(`
            <form id="formulario" name = "formulario-pago">
            
                <div class="d-flex justify-content-center">                     
                  <div class="form__name mx-3">
                    <label class="mx-3" for="nombre">Nombre</label>
                    <input type="text" id="nombre" name="name" placeholder="Tu nombre" maxlength = "20" required />
                    <br><br>
                    <label class="mx-3" for="apellido">Apellido</label>  
                    <input type="text" id="apellido" name="lastName" placeholder="Tu apellido" maxlength = "20" required />
                    <br><br>
                  </div>

                  <div class="mx-3">
                    <label class="mx-3" for="email">Email</label>                 
                    <input type="email" id="email"  name="email" placeholder="Email Address" required />
                    <br><br>
                    <label class="mx-3" for="telefono">Teléfono</label>               
                    <input type="text" id="telefono" name="telefono" placeholder="Tu número" maxlength = "10" required />                
                  </div>
                </div>
                          
                <div class="metodos-pagos text-center">
                  <br><br>
                  <label for="metodo" ><i class="fas fa-money-check-alt"></i> Métodos de pago</i></label>
                  <br><br>
                  <input type="radio" value="tarjeta" id="tarjeta" name="metodo" required>
                  <label class="mx-2" for="tarjeta"><i class="fas fa-credit-card"></i> Tarjeta de crédito/débito</label>
                  <br><br>
                  <input type="radio" value="banco" id="banco" name="metodo" required>
                  <label class="mx-3" for="banco"><i class="fas fa-university"></i> Transferencia bancaria</label>
                  <br><br>
                  <button id="btn-siguiente" class="btn btn-dark">Enviar</button>
                </div>

            </form>`)
}

export { mostrarFormularioPago }