var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let seconds = Number(lines[0]);

const hours = Math.floor(seconds / 3600);
seconds = seconds % 3600;

const minutes = Math.floor(seconds / 60);
seconds = seconds % 60;

console.log(`${hours}:${minutes}:${seconds}`);
