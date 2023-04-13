const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const table = [
  3, 2, 1, 2, 3, 3, 3, 3, 1, 1, 3, 1, 3, 3, 1, 2, 2, 2, 1, 2, 1, 1, 2, 2, 2, 1,
];

let stack = input[0]
  .split("")
  .map((i) => table[i.charCodeAt(0) - "A".charCodeAt(0)])
  .reverse();

let temp = [];
while (stack.length > 1) {
  while (stack.length >= 2) {
    temp.push((stack.pop() + stack.pop()) % 10);
  }
  if (stack.length > 0) temp.push(stack.pop());
  stack = [...temp.reverse()];
  temp = [];
}
console.log(stack[0] % 2 === 0 ? "You're the winner?" : "I'm a winner!");

//solve
//바보 그냥 다 더한다음 홀짝 체크만 하면 되네!!
const sum = input[0]
  .split("")
  .map((i) => table[i.charCodeAt(0) - "A".charCodeAt(0)])
  .reduce((prev, curr) => prev + curr);
console.log(sum % 2 === 0 ? "You're the winner?" : "I'm a winner!");
