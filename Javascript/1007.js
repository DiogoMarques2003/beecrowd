var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = Number(lines[0]),
    B = Number(lines[1]),
    C = Number(lines[2]),
    D = Number(lines[3]);
    
const diferenca = A * B - C * D;

console.log(`DIFERENCA = ${diferenca}`);