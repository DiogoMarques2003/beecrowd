var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines[0].split(' ').map(n => Number(n));
const startDate = numbers[0],
      endDate = numbers[1];
     
let timePlayed = 0; 
     
if (startDate === endDate) {
    timePlayed = 24;
} else if (startDate > endDate) {
    timePlayed = (24 - startDate) + endDate;
} else {
    timePlayed = endDate - startDate;
}

console.log(`O JOGO DUROU ${timePlayed} HORA(S)`);