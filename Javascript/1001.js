var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const firstNumber = Number(lines[0]),
    secondNumber = Number(lines[1]);
    
console.log(`X = ${firstNumber + secondNumber}`)