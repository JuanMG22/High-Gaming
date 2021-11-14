const URLJSON = 'productos.json';

$('#btn-ajax').click( () => {
    $.getJSON( URLJSON, (response, status) => {

        if (status !== 'success') {
            throw new Error('error')
        }

        for (const article of response) {
            $('#content').prepend(`

                <h3> ${article.titulo} </h3>

            `)
        }
    })
})