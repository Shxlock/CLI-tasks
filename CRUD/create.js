import askQuestion from "./question.js";
import tasks from '../tasks.js'


import rl from './rl.js'



async function createTask() {
    const id = await askQuestion("Inserta un ID: ");
    const description = await askQuestion("Inserta la descripcion: ");
    const status = await askQuestion("Inserta un status (todo, in-progress, done): ");
    const createdAt = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
    const updatedAt = createdAt;
    
    console.log(`ID: ${id}`);
    console.log(`Descripcion: ${description}`);
    console.log(`Status: ${status}`);
    console.log(`Creado: ${createdAt}`);
    console.log(`Actualizado: ${updatedAt}`);

    const task = {
        id: id,
        description: description,
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt
    }

    tasks.push(task)

    console.log(tasks);

}

export default createTask;