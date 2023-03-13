const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const stack = [];
const answer = [];

for (let i = 1; i <= n; i++) {
  const command = input[i].split(" ");
  let temp = "";
  switch (command[0]) {
    case "push":
      stack.push(parseInt(command[1]));
      break;
    case "pop":
      temp = stack.length === 0 ? -1 : stack.pop();
      answer.push(temp);
      break;
    case "size":
      answer.push(stack.length);
      break;
    case "empty":
      temp = stack.length === 0 ? 1 : 0;
      answer.push(temp);
      break;
    case "top":
      temp = stack.length === 0 ? -1 : stack[stack.length - 1];
      answer.push(temp);
      break;
  }
}

console.log(answer.join("\n"));

// solve
