var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const X = Number(lines[0]),
    Y = Number(lines[1]);
    
console.log(`${(X / Y).toFixed(3)} km/l`);
