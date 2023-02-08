var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const x = Number(lines[0]),
    y = Number(lines[1]);
    
console.log(`PROD = ${x * y}`)