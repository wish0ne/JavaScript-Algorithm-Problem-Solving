const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const dp = new Array(n);
for (let i = 0; i < n; i++) dp[i] = new Array(2).fill(0n);
dp[0][1] = 1n;
for (let i = 1; i < n; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
  dp[i][1] = dp[i - 1][0];
}
console.log((dp[n - 1][0] + dp[n - 1][1]).toString());

//solve
//BigInt 범위까지 넘어갈 수 있으므로 자료형 바꿔야함

//ref1 : 피보나치 수열
//끝에 0을 더하거나 01을 더하는 경우의수밖에 없음
// -> i-1자리 수에 0을 더하거나, i-2자리수에 01을 더하기
const d = new Array(n + 1);
d[1] = 1n;
d[2] = 1n;
for (let i = 3; i <= n; i++) {
  d[i] = d[i - 1] + d[i - 2];
}
console.log(d[n].toString());
