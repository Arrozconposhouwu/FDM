// Cuando el DOM se ha cargado completamente, se ejecuta la función IniciarAPP()
document.addEventListener('DOMContentLoaded', function () {
    IniciarAPP();
});

// Función para iniciar la aplicación
function IniciarAPP() {
    // Llama a la función CrearGaleria() para crear la galería de imágenes
    CrearGaleria();
}

// Función para crear la galería de imágenes
function CrearGaleria() {
    // Selecciona el elemento con la clase 'galeria__imagenes' para agregar las imágenes
    const galeria = document.querySelector('.galeria__imagenes');
    for (let i = 1; i <= 12; i++) {
        // Crea un nuevo elemento 'picture' para mostrar una imagen
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/grande/${i}.avif" type="image/avif">
            <source srcset="build/img/grande/${i}.webp" type="image/webp">
            <img src="build/img/grande/${i}.png" alt="Imagen de Galeria">
        `;

        // Asigna un evento 'onclick' a cada imagen creada para mostrar la imagen en la superposición
        imagen.onclick = function () {
            mostrarImagen(i);
        }

        // Agrega la imagen a la galería
        galeria.appendChild(imagen);
    }
}

// Función para mostrar la imagen seleccionada en una superposición (overlay)
function mostrarImagen(id) {
    // Crea un nuevo elemento 'picture' para mostrar la imagen seleccionada
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img src="build/img/grande/${id}.png" alt="Imagen de Galeria">
    `;

    // Crea un nuevo elemento 'div' que servirá como capa superpuesta (overlay)
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);

    // Agrega la clase 'overlay' al div, que tendrá estilos para mostrar la superposición
    overlay.classList.add('overlay');

    // Busca el elemento 'body' del documento y agrega la superposición 'overlay' al final
    const body = document.querySelector('body');
    body.appendChild(overlay);
}
