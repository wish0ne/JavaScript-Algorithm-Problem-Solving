const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const answer = [];
for (let s of input) {
  if (s === "END") break;
  answer.push(s.split("").reverse().join(""));
}
console.log(answer.join("\n"));

//solve
