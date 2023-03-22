const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);
const answer = [];
for (let i = 1; i <= t; i++) {
  answer.push(check(i) ? "YES" : "NO");
}

function check(i) {
  const stack = [];
  for (let ps of input[i].split("")) {
    if (ps === "(") stack.push("(");
    else {
      if (stack.length === 0) {
        return false;
      } else stack.pop();
    }
  }
  if (stack.length > 0) return false;
  return true;
}

console.log(answer.join("\n"));

//solve
