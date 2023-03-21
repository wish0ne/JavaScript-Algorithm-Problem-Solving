const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);
const answer = [];
for (let i = 1; i <= t; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  answer.push((a * b) / GCD(a, b));
}
console.log(answer.join("\n"));

function GCD(a, b) {
  return b === 0 ? a : GCD(b, a % b);
}

//solve
