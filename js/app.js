// Variables

const btnMenu = document.querySelector("#menu");
const btnCarrito = document.querySelector('#carrito');
const cerrar = document.querySelector("#x");
const menuMobil = document.querySelector("#menuMobile");
const cardCarrito = document.querySelector('#card-carrito');

// Eventos
listener();
function listener() {
  btnMenu.addEventListener("click", mostrarMenu);
  cerrar.addEventListener("click", cerrarMenu);
  // btnCarrito.addEventListener("mouseenter",mostarCarrito);
  // btnCarrito.addEventListener("mouseout",mostarCarrito);
  btnCarrito.addEventListener("click",mostarCarrito);
}

// Funciones

function mostrarMenu() {
  if (menuMobil.classList.contains("mobile")) {
    menuMobil.classList.remove("mobile");
  } else {
    menuMobil.classList.add("mobile");
    menuMobil.style.display = "flex";
    
  }
}
function cerrarMenu() {
  menuMobil.classList.remove("mobile");
  menuMobil.removeAttribute("style");
  btnMenu.classList.add("activo");
}
function mostarCarrito (e) {
  
console.log();
const mensaje =document.querySelector('.mensaje'); 
const perfil = document.querySelector('#perfil');

 if(cardCarrito.classList.contains('activoCar')) {
  cardCarrito.classList.remove('activoCar');
  perfil.classList.remove('seleccionado');
 } else{
  cardCarrito.classList.add('activoCar');
  perfil.classList.add('seleccionado');
 }
}