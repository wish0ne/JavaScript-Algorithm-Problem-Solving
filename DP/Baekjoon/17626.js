const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const dp = new Array(n + 1).fill(Infinity);
for (let i = 1; i <= parseInt(Math.sqrt(n)); i++) {
  dp[i * i] = 1;
}

for (let i = 1; i <= parseInt(Math.sqrt(n)); i++) {
  let x = i * i;
  for (let j = 2; j <= n; j++) {
    if (j - x < 0) continue;
    dp[j] = Math.min(dp[j], dp[x] + dp[j - x]);
  }
}
console.log(dp[n]);

//solve
