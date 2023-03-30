const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);

const dp = new Array(100001);
for (let i = 1; i <= 100001; i++) dp[i] = new Array(4).fill(0);
dp[1][1] = 1; // 1
dp[2][2] = 1; // 2
dp[3][1] = 1; // 2 + 1
dp[3][2] = 1; // 1 + 2
dp[3][3] = 1; // 3

for (let i = 4; i <= 100001; i++) {
  dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % 1000000009;
  dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % 1000000009;
  dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % 1000000009;
}

const answer = [];
for (let i = 1; i <= t; i++) {
  const n = parseInt(input[i]);
  answer.push((dp[n][1] + dp[n][2] + dp[n][3]) % 1000000009);
}
console.log(answer.join("\n"));

//solve
//DP 어려워...
//숫자가 연속하면 안됨 -> 마지막 숫자에 따라 올수있는 뒤 수가 달라지므로 이를 각각 나눠서 저장
