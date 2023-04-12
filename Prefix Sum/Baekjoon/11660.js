const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const table = [];
for (let i = 1; i <= n; i++) {
  table.push(input[i].split(" ").map(Number));
}
//누적합
const sum = [];
for (let i = 0; i < n; i++) sum.push(new Array(n).fill(0));
sum[0][0] = table[0][0];
for (let i = 1; i < n; i++) {
  sum[0][i] = sum[0][i - 1] + table[0][i];
  sum[i][0] = sum[i - 1][0] + table[i][0];
}
for (let i = 1; i < n; i++) {
  for (let j = 1; j < n; j++) {
    sum[i][j] = sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1] + table[i][j];
  }
}

const answer = [];
for (let i = n + 1; i <= n + m; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  let result = sum[x2 - 1][y2 - 1];
  if (y1 > 1) result -= sum[x2 - 1][y1 - 2];
  if (x1 > 1) result -= sum[x1 - 2][y2 - 1];
  if (x1 > 1 && y1 > 1) result += sum[x1 - 2][y1 - 2];
  answer.push(result);
}
console.log(answer.join("\n"));
