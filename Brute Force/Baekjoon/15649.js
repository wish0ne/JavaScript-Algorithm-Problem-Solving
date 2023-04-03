const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const answer = [];
const print = [];
solve();

function solve() {
  if (answer.length === m) {
    print.push(answer.join(" "));
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (!answer.includes(i)) {
      answer.push(i);
      solve();
      answer.pop();
    }
  }
}
console.log(print.join("\n"));

//solve
//기본 개념문제인데 푸는데 오래걸리면 안되지...
//print가 많아서 매번 print하면 시간 엄청 오래걸림!
