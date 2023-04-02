const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const dp = new Array(n + 1);
for (let i = 0; i <= n; i++) dp[i] = new Array(10);
dp[1][0] = 0n;
for (let i = 1; i <= 9; i++) dp[1][i] = 1n;

for (let i = 2; i <= n; i++) {
  dp[i][0] = dp[i - 1][1] % 1000000000n;
  for (let j = 1; j <= 8; j++) {
    dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000n;
  }
  dp[i][9] = dp[i - 1][8] % 1000000000n;
}

console.log(
  (dp[n].reduce((prev, curr) => prev + curr) % 1000000000n).toString()
);

//solve
//BigInt랑 나머지 안구해서 계속 틀림 ㅜ
