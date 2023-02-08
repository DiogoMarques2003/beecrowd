var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = Number(lines[0]),
    B = Number(lines[1]),
    C = Number(lines[2]);
    
const media = Number((A * 2 + B * 3 + C * 5) / 10).toFixed(1);

console.log(`MEDIA = ${media}`);