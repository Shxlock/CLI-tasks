import askQuestion from "./question.js";
import tasks from '../tasks.js'
import rl from './rl.js'
import read from './read.js'


export default async function update(){
    read()
    const idModificar = await askQuestion("Ingresa el ID de la tarea que desees modificar: ")
    console.log(idModificar);
}