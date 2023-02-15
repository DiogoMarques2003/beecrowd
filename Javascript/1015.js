var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const valuesPoint1 = lines[0].split(' '),
    valuesPoint2 = lines[1].split(' ');

const p1 = {
    x: Number(valuesPoint1[0]),
    y: Number(valuesPoint1[1])
};

const p2 = {
    x: Number(valuesPoint2[0]),
    y: Number(valuesPoint2[1])
};

const distance = Math.sqrt(
    Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
);

console.log(distance.toFixed(4));
