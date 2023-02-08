var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = Number(lines[0]),
    B = Number(lines[1]);
    
console.log(`SOMA = ${A + B}`)