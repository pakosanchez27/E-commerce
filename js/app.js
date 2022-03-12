// Variables

const btnMenu = document.querySelector("#menu");
const cerrar = document.querySelector("#x");
const menuMobil = document.querySelector("#menuMobile");


// Eventos
listener();
function listener() {
  btnMenu.addEventListener("click", mostrarMenu);
cerrar.addEventListener("click", cerrarMenu);
}

// Funciones

function mostrarMenu() {
    
  if (menuMobil.classList.contains("mobile")) {
    menuMobil.classList.remove("mobile");
  } else {
    menuMobil.classList.add("mobile");
    menuMobil.style.display = "flex"
    menuMobil.blue.restart;
    
    
    
  }
}
 function cerrarMenu() {
   menuMobil.classList.remove("mobile");
   menuMobil.removeAttribute("style")
  btnMenu.classList.add("activo");
}
