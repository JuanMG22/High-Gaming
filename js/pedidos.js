const mostrarBotonPedido = () => {
    $('#boton-pedidos').show()
}
const ocultarBotonPedido = () => {
    $('#boton-pedidos').hide()
}

$('#btn-pedido').click(() => {
    (async () => {


        const { value: formValues } = await Swal.fire({
            title: 'Multiple inputs',
            html:
                `
                    <input id="swal-input1" class="swal2-input" type="email" placeholder="Email">
                    <input id="swal-input2" class="swal2-input">
                    `,
            focusConfirm: false,
            width: '90%',
            heightAuto: 'false',
            allowOutsideClick: false,
            allowEscapeKey: false,
            preConfirm: () => {
                return [
                document.getElementById('swal-input1').value,
                document.getElementById('swal-input2').value
                ]
            }
            })

            if (formValues) {
            Swal.fire(JSON.stringify(formValues))
            }

        const {value: accept} = await Swal.fire({
            title: 'Terms and conditions',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder: 'I agree with the terms and conditions',
            confirmButtonText: 'Continue <i class="fa fa-arrow-right"></i>',
            width: '90%',
            heightAuto: 'false',
            allowOutsideClick: false,
            allowEscapeKey: false,
            inputValidator: (result) => {
                return !result && 'You need to agree with T&C'
            }
        })


        if (accept) {
            Swal.fire('Gracias por comprar en HighGaming :)')
        }

    })()
});

export {
    mostrarBotonPedido,
    ocultarBotonPedido
}