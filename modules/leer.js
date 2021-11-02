const fs = require ("fs");
const leer = file => {
    const contenido = fs.readFileSync ( file, "utf8" );
    return JSON.parse (contenido);
}
module.exports = leer;

