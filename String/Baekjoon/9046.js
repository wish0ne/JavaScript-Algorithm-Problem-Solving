const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);
const answer = [];
for (let test = 1; test <= t; test++) {
  const count = new Array(26).fill(0);
  input[test].split("").forEach((char) => {
    if (char === " ") return;
    count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  });
  let max = Math.max(...count);
  if (count.indexOf(max) !== count.lastIndexOf(max)) answer.push("?");
  else answer.push(String.fromCharCode(count.indexOf(max) + "a".charCodeAt(0)));
}
console.log(answer.join("\n"));

//solve
