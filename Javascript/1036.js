var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const A = Number(values[0]),
    B = Number(values[1]),
    C = Number(values[2]);

const delta = B * B - 4 * A * C;

if (delta < 0 || A === 0) return console.log('Impossivel calcular');

const r1 = (-B + Math.sqrt(delta)) / (2 * A),
    r2 = (-B - Math.sqrt(delta)) /(2 * A);
    
console.log(`R1 = ${r1.toFixed(5)}
R2 = ${r2.toFixed(5)}`);
