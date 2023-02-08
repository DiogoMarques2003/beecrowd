var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159,
    R = lines[0];
    
const volume = (4 / 3.0) * PI * Math.pow(R, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);