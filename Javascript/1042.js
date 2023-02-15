var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');
const tempArray = [...values];

console.log(tempArray.sort((a, b) => a - b).join('\n') + '\n');

console.log(values.join('\n'));
