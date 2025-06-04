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




//CARRUSEL
// ============================
//     CARRUSEL DE JUEGOS
// ============================

document.querySelectorAll('.container-carrusel').forEach(wrapper => {
    const track = wrapper.querySelector('.carrusel-track');
    const btnIzq = wrapper.querySelector('.btn-izq');
    const btnDer = wrapper.querySelector('.btn-der');
    const items = wrapper.querySelectorAll('.game');

    let itemWidth = 0;
    let visibleItems = 0;
    let maxScrollIndex = 0;
    let scrollIndex = 0;

    function calcularParametros() {
        // Recalcula valores según el tamaño actual del contenedor
        itemWidth = items[0].getBoundingClientRect().width + 20; // 20 es el gap entre elementos
        const containerWidth = wrapper.offsetWidth;
        visibleItems = Math.floor(containerWidth / itemWidth);
        maxScrollIndex = Math.max(0, items.length - visibleItems);

        // Si ya estamos más allá del nuevo máximo, corregimos el índice
        if (scrollIndex > maxScrollIndex) {
            scrollIndex = maxScrollIndex;
            track.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
        }

        updateButtons();
    }

    function updateButtons() {
        btnIzq.style.display = scrollIndex <= 0 ? 'none' : 'block';
        btnDer.style.display = scrollIndex >= maxScrollIndex ? 'none' : 'block';
    }

    btnIzq.addEventListener('click', () => {
        if (scrollIndex > 0) {
            scrollIndex--;
            track.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            updateButtons();
        }
    });

    btnDer.addEventListener('click', () => {
        if (scrollIndex < maxScrollIndex) {
            scrollIndex++;
            track.style.transform = `translateX(-${scrollIndex * itemWidth}px)`;
            updateButtons();
        }
    });

    // Recalcular cuando la ventana se redimensiona
    window.addEventListener('resize', calcularParametros);

    // Inicializar
    track.style.animation = 'none';
    calcularParametros();
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
