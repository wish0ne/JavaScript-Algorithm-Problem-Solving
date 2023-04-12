const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
console.log(solution(n));

function solution(n) {
  if (n === 3) {
    return ["***", "* *", "***"].join("\n");
  }
  let result = solution(n / 3);
  let blank = result
    .split("\n")
    .map((row) => row + " ".repeat(n / 3) + row)
    .join("\n");
  let line = result
    .split("\n")
    .map((row) => row.repeat(3))
    .join("\n");
  return [line, blank, line].join("\n");
}

//solve
