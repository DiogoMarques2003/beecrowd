var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const x = Number(values[0]),
    y = Number(values[1]);
    
if (x === 0 && y === 0) return console.log('Origem');
if (x === 0) return console.log('Eixo Y');
if (y === 0) return console.log('Eixo X');
if (x > 0 && y > 0) return console.log('Q1');
if (x < 0 && y > 0) return console.log('Q2');
if (x < 0 && y < 0) return console.log('Q3');
if (x > 0 && y < 0) return console.log('Q4');
