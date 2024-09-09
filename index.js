import tasks from './tasks.js'
import createTask from './CRUD/create.js'
import deleteTask from './CRUD/delete.js'
import askQuestion from "./CRUD/question.js";
import read from './CRUD/read.js'
import readline  from 'readline'
import update from './CRUD/update.js'


import rl from './CRUD/rl.js'

console.log(tasks);


console.log("--------------------Bienvenido a tu gestor de tareas----------------------");


async function main() {
    console.log(tasks);
    console.log("--------------------Bienvenido a tu gestor de tareas----------------------");

    let respuesta = '0';

    do {
        console.log("Ingresa una opción: ");
        console.log("1. Crear Tarea");
        console.log("2. Eliminar Tarea");
        console.log("3. Modificar Tarea");
        console.log("4. Ver Tareas");
        console.log("0. Salir");

        respuesta = await askQuestion("Selecciona una opción: ");

        switch (respuesta) {
            case '1':
                await createTask();
                break;
            case '2':
                await deleteTask();
                break;
            case '3':
                // Implementa la funcionalidad de modificar tareas aquí
                await update()
                break;
            case '4':
                console.log("Tareas actuales:");
                await read()
                break;
            case '0':
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción incorrecta. Por favor, elige una opción válida.");
                break;
        }
    } while (respuesta !== '0');

    rl.close();
}

main();