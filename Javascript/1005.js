var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = Number(lines[0]),
    B = Number(lines[1]);
    
const media = Number((A * 3.5 + B * 7.5) / 11).toFixed(5);

console.log(`MEDIA = ${media}`);