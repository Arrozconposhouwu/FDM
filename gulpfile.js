const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass")); // Tal cual que así

function css(done) {
    src("src/scss/app.scss") // Identificar el archivo de SASS
        .pipe(sass()) // Compilarlo
        .pipe(dest("build/css")); // Almacenarlo en el disco

    // Primero se idetifica el archivo, despues con el pipe se llama el sass (1) una vez llamado, el siguiente pipe se utiliza para que el archivo compilado se guarde en build/css
    // (1) Para llamarlo se utiliza la el const se llama la herramienta a utilizar y despues se utiliza require y se llama la herramienta.

    done(); // Callback que avisa a gulp que llegmaos al final
}

function dev(done) {
    watch("src/scss/app.scss", css);

    done();
}

exports.css = css;
exports.dev = dev;

// Export.css es para el nombre de la tarea = es el nombre de la función dentro del código.

//Aqui es para usarlo en el npx gulp css, despues en el .JSON vas a la parte de scripts, y tiene esta sintaxis "Nombre Comando" = "Herramienta Nombre Tarea", es decir, "css" = "gulp css"

//Recuerda que para permitir la conexión del gulp y el sass en necesario descargar el plugin gulp-sass que el comando es tal cual que así, npm instal --save-dev gulp-sass
