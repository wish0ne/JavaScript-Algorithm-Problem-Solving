const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const visited = new Array(100001).fill(-1);

const queue = [n];
visited[n] = n;
while (queue.length > 0) {
  const x = queue.shift();
  if (x === k) break;
  if (visited[x + 1] < 0) {
    queue.push(x + 1);
    visited[x + 1] = x;
  }
  if (visited[x - 1] < 0) {
    queue.push(x - 1);
    visited[x - 1] = x;
  }
  if (visited[x + x] < 0) {
    queue.push(x + x);
    visited[x + x] = x;
  }
}

//k에서부터 역추적
let count = 0;
const answer = [];
let index = k;
while (visited[index] !== index) {
  count += 1;
  answer.push(index);
  index = visited[index];
}
answer.push(n);
console.log(count);
console.log(answer.reverse().join(" "));

//solve
