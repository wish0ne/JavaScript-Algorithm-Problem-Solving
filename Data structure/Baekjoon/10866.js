const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const deque = [];
const answer = [];
for (let i = 1; i <= n; i++) {
  const command = input[i].split(" ");
  switch (command[0]) {
    case "push_back":
      deque.push(command[1]);
      break;
    case "push_front":
      deque.unshift(command[1]);
      break;
    case "pop_front":
      answer.push(deque.length > 0 ? deque.shift() : -1);
      break;
    case "pop_back":
      answer.push(deque.length > 0 ? deque.pop() : -1);
      break;
    case "size":
      answer.push(deque.length);
      break;
    case "empty":
      answer.push(deque.length > 0 ? 0 : 1);
      break;
    case "front":
      answer.push(deque.length > 0 ? deque[0] : -1);
      break;
    case "back":
      answer.push(deque.length > 0 ? deque[deque.length - 1] : -1);
      break;
  }
}

console.log(answer.join("\n"));
//solve
