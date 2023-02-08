var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines[0]),
    hoursWorked = Number(lines[1]),
    valuePerHour = Number(lines[2]);
    
const salary = hoursWorked * valuePerHour;

console.log(`NUMBER = ${number}\nSALARY = U$ ${salary.toFixed(2)}`);