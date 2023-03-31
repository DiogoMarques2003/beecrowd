var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numbers = lines[0].split(' ').map(n => Number(n)).sort((a, b) => b - a);
const A = numbers[0],
      B = numbers[1],
      C = numbers[2];
      
if (A >= B + C)
    return console.log(`NAO FORMA TRIANGULO`);
    
const numbers2 = numbers.map(n => Math.pow(n, 2));
const A2 = numbers2[0],
      B2 = numbers2[1],
      C2 = numbers2[2];
      
if (A2 === B2 + C2)
    console.log(`TRIANGULO RETANGULO`);
    
if (A2 > B2 + C2)
    console.log(`TRIANGULO OBTUSANGULO`);
    
if (A2 < B2 + C2)
    console.log(`TRIANGULO ACUTANGULO`);
    
if (A === B && B === C)
    return console.log(`TRIANGULO EQUILATERO`);
    
if (A === B || B === C || C === A)
    console.log(`TRIANGULO ISOSCELES`);