
const escribir = require("./escribir");

const borrar = (id, lista, file) => {
    const elements = lista.filter(e => e.id != id)

    
    escribir(file, elements);
    return elements
}

module.exports = borrar;