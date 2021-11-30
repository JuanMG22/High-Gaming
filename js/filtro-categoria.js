import { templateCard } from "./carrito.js";

$('#btn-todo').click(() => {
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .ram, .fuente, .gabinetes').fadeIn(150);
});

$('#btn-amd').click(() => {
    $('.ProcesadoresAMD').fadeIn(150);
    $('.ProcesadoresIntel, .gpus, .motherboard, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-intel').click(() => {
    $('.ProcesadoresIntel').fadeIn(150);
    $('.ProcesadoresAMD, .gpus, .motherboard, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-gpu').click(() => {
    $('.gpus').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .motherboard, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-motherboard').click(() => {
    $('.motherboard').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .ram, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-ram').click(() => {
    $('.ram').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .fuente, .gabinetes').fadeOut(150);
});

$('#btn-fuente').click(() => {
    $('.fuente').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .ram, .gabinetes').fadeOut(150);
});

$('#btn-gabinete').click(() => {
    $('.gabinetes').fadeIn(150);
    $('.ProcesadoresAMD, .ProcesadoresIntel, .gpus, .motherboard, .ram, .fuente').fadeOut(150);
});


const filtrarClasesCategoria = () => {
    if (
        templateCard.querySelector(`#producto-card`).classList.contains(`ProcesadoresAMD`) ||
        templateCard.querySelector(`#producto-card`).classList.contains(`ProcesadoresIntel`) ||
        templateCard.querySelector(`#producto-card`).classList.contains(`gpus`) ||
        templateCard.querySelector(`#producto-card`).classList.contains(`motherboard`) ||
        templateCard.querySelector(`#producto-card`).classList.contains(`ram`) ||
        templateCard.querySelector(`#producto-card`).classList.contains(`fuente`) ||
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

export { filtrarClasesCategoria }