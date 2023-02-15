var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const kmPerLiter = 12,
    tripTime = Number(lines[0]),
    tripAverageSpeed = Number(lines[1]);
    
const distance = tripTime * tripAverageSpeed;

const spentLiters = distance / kmPerLiter;

console.log(spentLiters.toFixed(3));
