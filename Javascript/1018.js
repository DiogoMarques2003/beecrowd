var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines[0]);
console.log(N);

const notas = [100, 50, 20, 10, 5, 2, 1];

notas.map((nota) => {
    const nNotas = Math.floor(N / nota);
    
    N -= nNotas * nota;
    
    console.log(`${nNotas} nota(s) de R$ ${nota},00`);
});
