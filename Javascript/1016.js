var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const kmPerMinute = 2,
    distance = Number(lines[0]);

console.log(`${distance * kmPerMinute} minutos`);
