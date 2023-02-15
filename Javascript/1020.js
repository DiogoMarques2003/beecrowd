var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let age = Number(lines[0]);

const years = Math.floor(age / 365);
age = age % 365;

const months = Math.floor(age / 30);
age = age % 30;

console.log(`${years} ano(s)
${months} mes(es)
${age} dia(s)`);
