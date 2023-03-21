const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const queue = [];
const answer = [];
for (let i = 1; i <= n; i++) {
  const command = input[i].split(" ");
  switch (command[0]) {
    case "push":
      queue.push(parseInt(command[1]));
      break;
    case "pop":
      queue.length === 0 ? answer.push(-1) : answer.push(queue.shift());
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      queue.length === 0 ? answer.push(1) : answer.push(0);
      break;
    case "front":
      queue.length === 0 ? answer.push(-1) : answer.push(queue[0]);
      break;
    case "back":
      queue.length === 0
        ? answer.push(-1)
        : answer.push(queue[queue.length - 1]);
      break;
  }
}

console.log(answer.join("\n"));

//solve

//ref1 : 더 간결한 풀이. 큐가 비었을때 불가능한 연산 수행 시 undefined 나오는 점 이용
//OR 연산자의 short circuit evaluation : 왼쪽부터 시작해서 truthy를 만나면 평가 중단 => 첫번쨰 truthy 반환
//+) AND 연산자의 short circuit evaluation : 왼쪽부터 시작해서 falsy를 만나면 평가 중단 => 첫번째 falsy 반환
const queue2 = [];
const answer2 = [];
for (let i = 1; i <= n; i++) {
  switch (input[i]) {
    case "pop":
      answer2.push(queue2.shift() || -1);
      break;
    case "size":
      answer2.push(queue2.length);
      break;
    case "empty":
      answer2.push(queue2.length ? 0 : 1);
      break;
    case "front":
      answer2.push(queue2[0] || -1);
      break;
    case "back":
      answer2.push(queue2[queue2.length - 1] || -1);
      break;
    default: // push
      queue2.push(input[i].slice(5));
      break;
  }
}
console.log(answer2.join("\n"));
