// Cuando se carga el contenido del DOM, se ejecuta la función IniciarAPP
document.addEventListener('DOMContentLoaded', function () {
    IniciarAPP();
});

// Función que inicia la aplicación llamando a CrearGaleria
function IniciarAPP() {
    CrearGaleria();
}

// Función que crea la galería de imágenes
function CrearGaleria() {
    // Obtener el elemento con la clase "galeria__imagenes"
    const galeria = document.querySelector('.galeria__imagenes');

    // Crear 12 imágenes en la galería
    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        // Agregar código HTML para las imágenes con formatos avif, webp y png
        imagen.innerHTML = `
            <source srcset="build/img/grande/${i}.avif" type="image/avif">
            <source srcset="build/img/grande/${i}.webp" type="image/webp">
            <img src="build/img/grande/${i}.png" alt="Imagen de Galeria">
        `;
        // Asignar un evento onclick a cada imagen para mostrarla al hacer clic
        imagen.onclick = function () {
            mostrarImagen(i);
        }
        // Agregar la imagen a la galería
        galeria.appendChild(imagen);
    }
}

// Función que muestra una imagen ampliada cuando se hace clic en una miniatura
function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    // Agregar código HTML para la imagen ampliada con formatos avif, webp y png
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="image/avif">
        <source srcset="build/img/grande/${id}.webp" type="image/webp">
        <img src="build/img/grande/${id}.png" alt="Imagen de Galeria">
    `;

    // Crear un overlay para mostrar la imagen ampliada
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    // Cerrar el overlay al dar click fuera de la imagen ampliada
    overlay.onclick = function () {
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar__body');
    }

    // Agregar un botón de cerrar para ocultar la imagen ampliada
    const cerrarimg = document.createElement('p');
    cerrarimg.textContent = 'X';
    cerrarimg.classList.add('boton__cerrar');

    // Cerar el overlay al darle click al boton
    cerrarimg.onclick = function () {
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar__body');
    }

    // Agregar el cerrado al overlay.
    overlay.appendChild(cerrarimg);

    // Agregar el overlay a la página y fijar el cuerpo para evitar el desplazamiento
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar__body');
}
