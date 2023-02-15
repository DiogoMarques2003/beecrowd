var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const values = lines[0].split(' ');

const n1 = Number(values[0]),
    n2 = Number(values[1]),
    n3 = Number(values[2]),
    n4 = Number(values[3]);
    
const media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10;

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7) return console.log('Aluno aprovado.');
if (media < 5) return console.log('Aluno reprovado.');

console.log('Aluno em exame.');

const exameNote = Number(lines[1]);

console.log(`Nota do exame: ${exameNote.toFixed(1)}`);

const mediaExame = (media + exameNote) / 2;

if (mediaExame >= 5) console.log('Aluno aprovado.');
else console.log('Aluno reprovado.');

console.log(`Media final: ${mediaExame.toFixed(1)}`);
