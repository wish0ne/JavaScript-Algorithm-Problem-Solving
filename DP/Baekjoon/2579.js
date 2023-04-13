const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const stairs = [];
for(let i=1; i<=n; i++) stairs.push(parseInt(input[i]));

const dp = new Array(n+1).fill(0);
dp[1] = stairs[0];
dp[2] = stairs[1] + stairs[0];
for(let i=3; i<=n; i++){
    dp[i] = Math.max(dp[i-2], dp[i-3] + stairs[i-2]) + stairs[i-1];
}
console.log(dp[n]);

//solve
