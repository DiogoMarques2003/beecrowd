var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const itemsPrice = [4, 4.5, 5, 2, 1.5];

const values = lines[0].split(' ');

const code = Number(values[0]),
    quantity = Number(values[1]);
    
const totalValue = itemsPrice[code - 1] * quantity;

console.log(`Total: R$ ${totalValue.toFixed(2)}`);
