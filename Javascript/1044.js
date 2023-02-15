var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const A = Number(values[0]),
    B = Number(values[1]);
    
if (A % B === 0 || B % A === 0) console.log('Sao Multiplos');
else console.log('Nao sao Multiplos');
