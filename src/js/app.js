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

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/grande/${i}.avif" type="image/avif">
            <source srcset="build/img/grande/${i}.webp" type="image/webp">
            <img src="build/img/grande/${i}.png" alt="Imagen de Galeria" class="galeria__img">
        `;

        imagen.onclick = function () {
            mostrarImagen(i);
        }
        galeria.appendChild(imagen);
    }
}

// Función que permite ver cada imagen de la galeria.
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img src="build/img/grande/${id}.png" alt="Imagen de Galeria" class="galeria__img">
    `;

    // Fondo negro.
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Hacer que se muestre la imagen.
    const body = document.querySelector('body');
    body.appendChild(overlay);
}