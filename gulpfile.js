const { src, dest, watch } = require("gulp");

// CSS
const sass = require("gulp-sass")(require("sass")); // Tal cual que así
const plumber = require("gulp-plumber"); // evitar que se cancele el watch al colocar una variable que no exista
// Imagenes
const webp = require('gulp-webp');

// Convertir los archivos .scss a .css
function css(done) {
    // src("src/scss/app.scss") // Identificar el archivo de SASS
    src("src/scss/**/*.scss") //con esta sintaxis lo que hace es que identifique cada arhcivo dentro de la carpeta scss con la extención scss
        .pipe(plumber())
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarlo en el disco

    // Primero se idetifica el archivo, despues con el pipe se llama el sass (1) una vez llamado, el siguiente pipe se utiliza para que el archivo compilado se guarde en build/css
    // (1) Para llamarlo se utiliza la el const se llama la herramienta a utilizar y despues se utiliza require y se llama la herramienta.

    done(); // Callback que avisa a gulp que llegmaos al final
}

// Convertir Imagenes
function towebp(done) {
    src("img/**/*.{png,jpg}") // Aqui se buscan los archivos dentro de la carpeta IMG.
        .pipe(webp()) // Posteriormente se llama la constante que esta relacionada con el gulp-webp, en donde esta se encarga de convertir los archivos ya encontrados en la anteior linea a webp.
        .pipe(dest("build/img")); // Una vez convertidos los archivos, son guardados en la carpeta build, teniendo su propia carpeta llamada img.
    done();
}

// Compilar cambios al guardar
function dev(done) {
    // watch("src/scss/app.scss", css);
    watch("src/scss/**/*.scss", css); // Aqui explicando un poco, lo que hace esta linea a la hora de registrar un cambio, llama a la funcion
    done();
}

exports.css = css;
exports.dev = dev;
exports.towebp = towebp;

// Export.css es para el nombre de la tarea = es el nombre de la función dentro del código.

// Aqui es para usarlo en el npx gulp css, despues en el .JSON vas a la parte de scripts, y tiene esta sintaxis "Nombre Comando" = "Herramienta Nombre Tarea", es decir, "css" = "gulp css"

// Recuerda que para permitir la conexión del gulp y el sass en necesario descargar el plugin gulp-sass que el comando es tal cual que así, npm instal --save-dev gulp-sass