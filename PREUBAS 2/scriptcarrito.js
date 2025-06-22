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
