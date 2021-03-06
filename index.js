const leer = require("./modules/leer");
const listar = require("./modules/listar");
const crear = require("./modules/crear");
const borrar = require("./modules/borrar");

const {argv} = process;
const [node, file, action, id] = argv;

let tareas = null;
let resultado = null;

switch(action){
    case "-l":
        tareas = leer("./data/tareas.json");
        listar(tareas);
    break;
    case "-c":
        tareas = leer("./data/tareas.json");
        listar(tareas.filter(tarea => tarea.completa))
    break;
    case "-i":
        tareas = leer("./data/tareas.json");
        listar(tareas.filter(tarea => !tarea.completa))
    break;
    case "-s":
        tareas = leer("./data/tareas.json");
        resultado = tareas.find(tarea => tarea.id === parseInt(id));
        console.log(resultado ? resultado : "No se encontro el id", id); 
    break;   
    case "-a":
        tareas = leer("./data/tareas.json");
        resultado = crear(id, tareas, "./data/tareas.json")
        console.log(resultado);
        break;
        case "-b":
            tareas = leer("./data/tareas.json");
            resultado = borrar(id, tareas, "./data/tareas.json")
            console.log(resultado);
            break;
    default:
        console.log("No se reconocio la acción");              
}
