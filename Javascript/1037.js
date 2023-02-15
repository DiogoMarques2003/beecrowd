var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines[0]);

if (number < 0 || number > 100) return console.log('Fora de intervalo');

let valor = '';

if (number >= 0 && number <= 25) valor = '[0,25]';
else if (number > 25 && number <= 50) valor = '(25,50]';
else if (number > 50 && number <= 75) valor = '(50,75]';
else valor = '(75,100]';

console.log(`Intervalo ${valor}`);
