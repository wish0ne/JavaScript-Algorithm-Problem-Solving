const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const visited = new Array(100001).fill(-1);
visited[n] = 0;
const queue = [n];
while (queue.length > 0) {
  const x = queue.shift();
  if (x === k) {
    console.log(visited[x]);
    return;
  }
  [x + 1, x - 1, 2 * x].forEach((nx) => {
    //✅범위 체크 빼먹음!!
    if (nx >= 0 || nx <= 100001)
      if (visited[nx] < 0) {
        visited[nx] = visited[x] + 1;
        queue.push(nx);
      }
  });
}

//solve
