/*
//SCRIPT MODO OSCURO
document.getElementById("modo-oscuro-btn").addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");
    
    // Cambia el ícono de luna a sol si deseas
    const icono = this.querySelector("i");
    icono.classList.toggle("fa-moon");
    icono.classList.toggle("fa-sun");
});
*/

const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = toggleBtn.querySelector('i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        dropDownMenu.classList.remove('open');
        toggleBtnIcon.classList = 'fa-solid fa-bars';
    }
});



// Función para aplicar el modo oscuro si estaba activado
document.addEventListener("DOMContentLoaded", function () {
    const modoOscuroActivado = localStorage.getItem("modoOscuro") === "true";

    if (modoOscuroActivado) {
        document.body.classList.add("modo-oscuro");

        // Cambiar el ícono también si ya estaba activado
        const icono = document.querySelector("#modo-oscuro-btn i");
        if (icono) {
            icono.classList.remove("fa-moon");
            icono.classList.add("fa-sun");
        }
    }
});

// Evento del botón
document.getElementById("modo-oscuro-btn").addEventListener("click", function () {
    const modoOscuroActivo = document.body.classList.toggle("modo-oscuro");

    // Guardar el estado en localStorage
    localStorage.setItem("modoOscuro", modoOscuroActivo);

    // Cambiar íconos
    const icono = this.querySelector("i");
    icono.classList.toggle("fa-moon");
    icono.classList.toggle("fa-sun");
});


/*FUNCIONES DEL MODAL*/

// Agrega esto antes de cerrar el </body> o en tu archivo JS
// filepath: tu_archivo.js

// Selecciona imágenes dentro de todas las clases de juegos
document.querySelectorAll(
  '.juegoS .imagen-con-descripcion img, ' +
  '.juegoA .imagen-con-descripcion img, ' +
  '.juegoAvtr .imagen-con-descripcion img, ' +
  '.juegoL .imagen-con-descripcion img, ' +
  '.juegoD .imagen-con-descripcion img'
).forEach((img) => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function() {
    const title = img.alt;
    const imageSrc = img.src;
    const description = img.parentElement.querySelector('.descripcion').textContent;

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-image').src = imageSrc;
    document.getElementById('modal-description').textContent = description;

    document.getElementById('modal').style.display = 'flex';
  });
});

// Cierra el modal al hacer clic en la X
document.querySelector('.close-btn').onclick = function() {
  document.getElementById('modal').style.display = 'none';
};

// Cierra el modal al hacer clic fuera del contenido
document.getElementById('modal').onclick = function(e) {
  if (e.target === this) this.style.display = 'none';
};