var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let N = Number(lines[0]);

const notas = [100, 50, 20, 10, 5, 2],
    coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log('NOTAS:');
notas.map((nota) => {
    const nNotas = Math.floor(N / nota);
    
    N = (N % nota).toFixed(2);
    
    console.log(`${nNotas} nota(s) de R$ ${nota.toFixed(2)}`);
});

console.log('MOEDAS:');
coins.map((coin) => {
    const nCoins = Math.floor(N / coin);
    
    N = (N % coin).toFixed(2);
    
    console.log(`${nCoins} moeda(s) de R$ ${coin.toFixed(2)}`);
});
