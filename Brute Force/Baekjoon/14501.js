const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const t = []; //시간
const p = []; //수익   
for(let i=1; i<=n; i++){
    const [a, b] = input[i].split(" ").map(Number);
    t.push(a);
    p.push(b);
}

let answer = 0;
function solve(i, sum){
    if(i>=n){
        //console.log(sum);
        answer = Math.max(answer, sum);
        return;
    }
    //i번째 일 상담 O (가능하면)
    if(i + t[i]<=n) solve(i + t[i], sum+p[i]);
    //i번째 일 상담 X
    solve(i+1, sum);
}
solve(0, 0);
console.log(answer);

//solve