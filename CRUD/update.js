import askQuestion from "./question.js";
import tasks from '../tasks.json' assert { type: 'json' };
import rl from './rl.js'
import read from './read.js'


async function update(){
    read()
    const idModificar = await askQuestion("Ingresa el ID de la tarea que desees modificar: ")
    const taskIndex = tasks.findIndex(task => task.id === idModificar);
    if (taskIndex !== -1) {
        let {id,description,status,createdAt, updatedAt} = tasks[taskIndex]
        console.log(id);
        console.log(description);
        console.log(status);
        console.log(updatedAt);
        updatedAt = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' }); 
        
        const newDescription = await  askQuestion("Nueva descripcion: ");
        description = newDescription !== "" ? newDescription : description;
        console.log(`Antigua descripcion: ${description}`);


        const newStatus = await askQuestion("Nuevo status (todo, in-progress, done): ");
        status = newStatus !== "" ? newStatus : status;
        console.log(`Antigua descripcion: ${status}`);
        console.log(`New status ${newStatus}`);


        tasks[taskIndex] = { id, description, status, createdAt, updatedAt };
        console.log("Tarea actualizada:");
    }else{
        console.log("ID Invalido!. Intenta de nuevo");
        update()
    }
    
}


export default update;