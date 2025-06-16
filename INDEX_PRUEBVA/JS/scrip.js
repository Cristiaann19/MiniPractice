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

const gameCards = document.querySelectorAll(".game");

function abrirModal(imageData) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalButton = document.getElementById("modal-button");
    const modalDescription = document.getElementById("modal-description");
    const modalTitle = document.getElementById("modal-title");

    modal.classList.add('show');
    document.body.classList.add('modal-open');

    modalImage.src = imageData.src;
    modalDescription.textContent = imageData.dataset.description;
    modalButton.href = imageData.dataset.detailsLink;
    modalTitle.textContent = imageData.dataset.title;
}

function cerrarModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove('show');
    document.body.classList.remove('modal-open');
}

// Agregar el evento de click para abrir el modal en las tarjetas de juego
gameCards.forEach(card => {
    card.addEventListener('click', () => {
        const image = card.querySelector(".image-popular, .image-carrusel");
        if (image) abrirModal(image);
    });
});

// Evento para cerrar el modal al hacer clic en el botón de cierre (X)
document.querySelectorAll(".close-btn").forEach(btn => {
    btn.addEventListener('click', cerrarModal);
});

// Evento para cerrar el modal al hacer clic fuera del modal
window.addEventListener('click', (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) cerrarModal();
});

// Evento para cerrar el modal al presionar la tecla Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") cerrarModal();
});
