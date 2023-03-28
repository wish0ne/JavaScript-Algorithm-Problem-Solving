const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const queue = new Array(n);
for (let i = 0; i < n; i++) queue[i] = i + 1;

const answer = [];
let count = 1;
while (queue.length > 0) {
  if (count === k) {
    answer.push(queue.shift());
    count = 1;
  } else {
    queue.push(queue.shift());
    count += 1;
  }
}

console.log(`<${answer.join(", ")}>`);

//solve
//ref1 : 3달전의 나는 똑똑했구나 아닌가 걍 큐를 쓸 생각을 못했나
const answer2 = [];
const array = [];

for (let i = 1; i <= n; i++) array.push(i);

let idx = n - 1;
while (array.length) {
  idx = (idx + k) % array.length;
  answer2.push(array.splice(idx, 1));
  idx -= 1;
}
console.log(`<${answer2.join(", ")}>`);
