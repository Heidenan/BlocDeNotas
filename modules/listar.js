
 const listar = lista => lista.forEach(item => {

    const {titulo, id, completa} = item

    console.log("--------------------");
    console.log("Titulo: ",titulo);
    console.log("Identificador: ",id);
    console.log("Completa: ",completa ? "si" : "no");
    console.log("--------------------");
 });    
 
module.exports = listar;