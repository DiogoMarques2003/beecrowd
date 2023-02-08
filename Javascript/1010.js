var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const line1Values = lines[0].split(' '),
    line2Values = lines[1].split(' ');
    
const totalValue = line1Values[1] * line1Values[2] +  line2Values[1] * line2Values[2];

console.log(`VALOR A PAGAR: R$ ${totalValue.toFixed(2)}`);