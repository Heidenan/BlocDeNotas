
const escribir = require("./escribir");
const crear = (info, lista, file) => {
    const element = {
        titulo: info,
        id: lista.length > 0 ? lista[lista.length-1].id + 1 : 1,
        completa: false
    }
    lista.push(element);
    escribir(file, lista);
    return element
}

module.exports = crear;