/****************Preloader *****************/

// Variable del loader
const preloader = document.querySelector(`#loader`);

// Desaparece el preloader cuando el DOM termina de cargarse
window.addEventListener('DOMContentLoaded', () => {
    preloader.classList.toggle(`close-loader`);
});


/****************Menu Hamburguesa *****************/

// variables de las lineas que componen el icono del boton
const linea1 = document.querySelector(`.header__navegacion--linea-1`);
const linea2 = document.querySelector(`.header__navegacion--linea-2`);
const linea3 = document.querySelector(`.header__navegacion--linea-3`);

// Variables del boton del menu y ul del menu
const btnBurger = document.querySelector(`#btn-menu`);
const navMenu = document.querySelector(`.header__navegacion--menu`);

// Evento que activa la navbar para dispositivos moviles
btnBurger.addEventListener(`click`, () => {
    // Al detectar click del boton llamo funcion abrirCerrarMenu
    abrirCerrarMenu();
});


// Fix en caso de presionar Contacto o logo en el index
const btnLogo = document.querySelector(`#btn-logo`);


btnLogo.addEventListener(`mouseup`, () => {
    // Al detectar click del boton llamo funcion cierraMenu
    cerrarMenu();
});

//Función abre/cierra menu agregando y quitando clases
const abrirCerrarMenu = () => {
    linea1.classList.toggle("l1-active");
    linea2.classList.toggle("l2-active");
    linea3.classList.toggle("l3-active");

    navMenu.classList.toggle("header__navegacion--menu-mobile");
}

// Función que cierra menu
const cerrarMenu = () => {
    linea1.classList.remove("l1-active");
    linea2.classList.remove("l2-active");
    linea3.classList.remove("l3-active");

    navMenu.classList.remove("header__navegacion--menu-mobile");
}