var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const pi = 3.14159,
    A = Number(values[0]),
    B = Number(values[1]),
    C = Number(values[2]);
    
const triangle = (A * C) / 2,
    circle = pi * Math.pow(C, 2),
    trapezio = ((A + B) * C) / 2,
    square = Math.pow(B, 2),
    rectangle = A * B;

console.log(`TRIANGULO: ${triangle.toFixed(3)}
CIRCULO: ${circle.toFixed(3)}
TRAPEZIO: ${trapezio.toFixed(3)}
QUADRADO: ${square.toFixed(3)}
RETANGULO: ${rectangle.toFixed(3)}`);