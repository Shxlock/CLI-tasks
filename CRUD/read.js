import askQuestion from "./question.js";
import tasks from '../tasks.js'
import rl from './rl.js'



export default async function read(){
    tasks.forEach(task => {
        console.log (`
            --------------------------------------
            ID: ${task.id}
            DESCRIPTION: ${task.description}
            STATUS: ${task.status}
            CREATED AT: ${task.createdAt}
            UPDATED AT: ${task.updatedAt}
            --------------------------------------
        `);
    });
}