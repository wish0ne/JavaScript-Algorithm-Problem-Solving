const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const p = input[1].split(" ").map(Number);

// const d = new Array(n + 1).fill(0);
// for (let i = 1; i <= n; i++) d[i] = p[i - 1];
// ✅ 아래 한문장으로 단축가능
const d = [0, ...p];

for (let i = 1; i <= n; i++) {
  for (let j = i + 1; j <= n; j++) {
    d[j] = Math.min(d[j], d[i] + p[j - i - 1]);
  }
}
console.log(d[n]);

//solve
