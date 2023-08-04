// Espera a que el contenido del DOM esté completamente cargado antes de iniciar la aplicación.
document.addEventListener('DOMContentLoaded', function () {
    IniciarAPP(); // Llama a la función IniciarAPP() cuando el DOM esté listo.
});

// Función que inicia la aplicación.
function IniciarAPP() {
    CrearGaleria(); // Llama a la función CrearGaleria() para crear la galería de imágenes.
}

// Función que crea la galería de imágenes.
function CrearGaleria() {
    const galeria = document.querySelector('.galeria__imagenes'); // Obtiene el elemento con la clase 'galeria__imagenes' desde el DOM.

    galeria.textContent = 'Texto de Prueba';
}