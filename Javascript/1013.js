var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const A = Number(values[0]),
    B = Number(values[1]),
    C = Number(values[2]);

const maxValue = Math.max(A, B, C);

console.log(`${maxValue} eh o maior`)
