const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);

const dp = new Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i < 11; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const answer = [];
for (let i = 1; i <= t; i++) {
  const n = parseInt(input[i]);
  answer.push(dp[n]);
}
console.log(answer.join("\n"));

//solve
