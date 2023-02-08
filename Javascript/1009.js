var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const workerSalary = Number(lines[1]),
    salesOfWorker = Number(lines[2]);
    
const total = workerSalary + (salesOfWorker * 0.15);

console.log(`TOTAL = R$ ${total.toFixed(2)}`);