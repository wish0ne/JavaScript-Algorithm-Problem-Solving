const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const numbers = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const answer = [];
const temp = [];
const visited = new Array(n).fill(false);
solve(0);
console.log(answer.join("\n"));
function solve(idx) {
  if (idx > n) return;
  if (temp.length === m) {
    answer.push(temp.join(" "));
    return;
  }
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      temp.push(numbers[i]);
      visited[i] = true;
      solve(idx + 1);
      temp.pop();
      visited[i] = false;
    }
  }
}
