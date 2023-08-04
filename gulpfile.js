const { src, dest, watch, parallel } = require("gulp");

// CSS

// css y dev
const sass = require("gulp-sass")(require("sass")); // Tal cual que así
const plumber = require("gulp-plumber"); // evitar que se cancele el watch al colocar una variable que no exista

// Imagenes

// towebp
const webp = require('gulp-webp');
// toavif
const avif = require('gulp-avif');
// img
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

// Convertir los archivos .scss a .css

function css(done) {
    // src("src/scss/app.scss") // Identificar el archivo de SASS
    src("src/scss/**/*.scss") //con esta sintaxis lo que hace es que identifique cada arhcivo dentro de la carpeta scss con la extención scss
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarlo en el disco
    done(); // Callback que avisa a gulp que llegmaos al final
}

// Convertir Imagenes a WEBP

function towebp(done) {
    const options = {
        quality: 50
    };
    src("src/img/**/*.{png,jpg}") // Aqui se buscan los archivos dentro de la carpeta IMG.
        .pipe(webp(options)) // Posteriormente se llama la constante que esta relacionada con el gulp-webp, en donde esta se encarga de convertir los archivos ya encontrados en la anteior linea a webp.
        .pipe(dest("build/img")); // Una vez convertidos los archivos, son guardados en la carpeta build, teniendo su propia carpeta llamada img.
    done();
}

// Convertir Imagenes a AVIF

function toavif(done) {
    const options = {
        quality: 50
    };
    src("src/img/**/*.{png,jpg}")
        .pipe(avif(options))
        .pipe(dest("build/img"));
    done();
}

// Reducir peso de Imagenes

function img(done) {
    const options = {
        optimizationLevel: 3
    };
    src("src/img/**/*.{png,jpg}")
        .pipe(cache(imagemin(options)))
        .pipe(dest('build/img'))
    done();
}

// jscript

function js(done) {
    src('src/js/**/*.js')
        .pipe(dest('build/js'))
    done();
}
// Compilar cambios al guardar

function dev(done) {
    // watch("src/scss/app.scss", css);
    watch("src/scss/**/*.scss", css);
    watch("src/js/**/*.js", js);
    // Aqui explicando un poco, lo que hace esta linea a la hora de registrar un cambio, llama a la funcion
    done();
}

// exports.css = css;
// exports .js = js;
exports.dev = dev;
// exports.towebp = towebp;
// exports.toavif = toavif;
// exports.img = img;
exports.converter = parallel(towebp, toavif, img);

// Export.css es para el nombre de la tarea = es el nombre de la función dentro del código.

// Aqui es para usarlo en el npx gulp css, despues en el .JSON vas a la parte de scripts, y tiene esta sintaxis "Nombre Comando" = "Herramienta Nombre Tarea", es decir, "css" = "gulp css"

// Recuerda que para permitir la conexión del gulp y el sass en necesario descargar el plugin gulp-sass que el comando es tal cual que así, npm instal --save-dev gulp-sass