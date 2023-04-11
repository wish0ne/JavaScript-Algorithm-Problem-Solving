const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

const sum = new Array(n+1).fill(0);
for(let i=1; i<=n; i++) sum[i] = sum[i-1] + numbers[i-1];

const answer = [];
for(let k=2; k<m+2; k++){
    const [i, j] = input[k].split(' ').map(Number);
    answer.push(sum[j] - sum[i-1]);
}
console.log(answer.join('\n'))

//solve
//누적합 개념문제