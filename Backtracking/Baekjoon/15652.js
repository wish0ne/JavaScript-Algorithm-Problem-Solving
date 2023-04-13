const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const answer  = [];
const temp = [];
solve(0, 1);

function solve(idx, prev){
    if(idx > n) return;
    if(temp.length === m){
        answer.push(temp.join(' '));
        return;
    }
    for(let i=prev; i<=n; i++){
        temp.push(i);
        solve(idx + 1, i);
        temp.pop();
    }
}
console.log(answer.join('\n'));

//solve