const listar = lista => {
     for (let index = 0; index < lista.length; index++){
         const element = lista[index];
         console.log ("-------------")
         console.log("Titulo", element.titulo)
         console.log("Identificador", element.identificador)
         console.log("Completa", element.completa)
         console.log ("-------------")
     }

}
module.exports = listar;   