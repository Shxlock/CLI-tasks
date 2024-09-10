import askQuestion from "./question.js";
import tasks from '../tasks.json' assert { type: 'json' };
import readline  from 'readline'

import rl from './rl.js'

export default async function deleteTask(){
    const idAeliminar = await askQuestion("Ingresa el ID de la tarea a eliminar o 0 para salir: ");
    if(idAeliminar != 0){
        
        const taskIndex = tasks.findIndex(task => task.id === idAeliminar);
        if (taskIndex !== -1) {
            // Eliminar la tarea del array
            tasks.splice(taskIndex, 1);
            console.log("Tareas restantes:");
            console.log(tasks);
        }else{
            console.log("No existe ese id en tasks");
            deleteTask()
        }
    }else{
        console.log("Saliendo del programa...");
        return
    }
}