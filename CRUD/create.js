import askQuestion from "./question.js";
import tasks from '../tasks.json' assert { type: 'json' };


import rl from './rl.js'



async function createTask() {
    const createdAt = new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' });
    const updatedAt = createdAt;

    let id;
    
    do {
        id = await askQuestion("Inserta un ID (debe ser mayor a 0): ");
        id = parseInt(id);  
        if (isNaN(id) || id <= 0) {
            console.log("El ID debe ser un número mayor a 0. Inténtalo de nuevo.");
        }
    } while (isNaN(id) || id <= 0);

    const description = await askQuestion("Inserta la descripcion: ");
    const status = await askQuestion("Inserta un status (todo, in-progress, done): ");

    console.log(`ID: ${id}`);
    console.log(`Descripcion: ${description}`);
    console.log(`Status: ${status}`);
    console.log(`Creado: ${createdAt}`);
    console.log(`Actualizado: ${updatedAt}`);

    const task = {
        id: id.toString(),  
        description: description,
        status: status,
        createdAt: createdAt,
        updatedAt: updatedAt
    }

    tasks.push(task);

    console.log("Tarea creada exitosamente:");
    console.log(tasks);
}

export default createTask;