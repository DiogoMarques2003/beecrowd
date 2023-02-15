var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const A = Number(values[0]),
    B = Number(values[1]),
    C = Number(values[2]),
    D = Number(values[3]);
    
if (B <= C) return console.log('Valores nao aceitos');
if (D <= A) return console.log('Valores nao aceitos');

const CPlusD = C + D,
    APlusB = A + B;
    
if (CPlusD <= APlusB) return console.log('Valores nao aceitos');
if (C < 0 && D < 0) return console.log('Valores nao aceitos');
if ((A % 2) !== 0) return console.log('Valores nao aceitos');

console.log('Valores aceitos');
