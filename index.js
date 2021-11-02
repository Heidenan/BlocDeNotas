const borrar = require ("./modules/borrar")
const escribir = require ("./modules/escribir")
const crear = require ("./modules/crear")
const leer = require ("./modules/leer");
const listar = require ("./modules/listar");
let tareas = leer ("./data/tareas.json")
listar (tareas)
