// ...existing code...
// Mostrar modal al hacer clic en la imagen del juego
document.querySelectorAll('.juegosAccion .imagen-con-descripcion img').forEach((img, idx) => {
    img.addEventListener('click', () => {
        document.querySelector('.products-preview').classList.add('active');
        // Mostrar solo el modal correspondiente
        document.querySelectorAll('.products-preview .preview').forEach((preview, i) => {
            preview.style.display = (i === idx) ? 'block' : 'none';
        });
    });
});

// Cerrar modal al hacer clic en la X
document.querySelectorAll('.products-preview .fa-times').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.products-preview').classList.remove('active');
    });
});

// Opcional: cerrar modal al hacer clic fuera del contenido
document.querySelector('.products-preview').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});