
import rl from './rl.js'

export default function askQuestion(query) {
    

    return new Promise(resolve => rl.question(query, resolve));
}

