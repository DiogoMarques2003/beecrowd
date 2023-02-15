var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const A = Number(values[0]),
    B = Number(values[1]),
    C = Number(values[2]);
    
if (A + B > C && A + C > B && B + C > A) {
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
} else {
    const area = ((A + B) * C) / 2;
    console.log(`Area = ${area.toFixed(1)}`);
}
