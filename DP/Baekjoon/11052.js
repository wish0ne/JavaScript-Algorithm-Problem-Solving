const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const p = input[1].split(" ").map(Number);

const max = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) max[i] = p[i - 1]; //j=i부터 시작하면 생략가능

for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    max[j] = Math.max(max[j], max[i] + max[j - i]);
  }
}
console.log(max[n]);

//solve1

//ref1
// 점화식 : dp[i] = Math.max(dp[i], dp[i-j] + p[j-1])
const dp = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  for (let j = i; j <= n; j++) {
    dp[j] = Math.max(dp[j], dp[j - i] + p[i - 1]);
  }
}
console.log(dp[n]);
