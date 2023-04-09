const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const board = [];
for (let i = 1; i <= n; i++) board.push(input[i].split("").map(Number));

const queue = [[0, 0]];
visited = new Array(n);
for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(0);
visited[0][0] = 1;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

while (queue.length > 0) {
  const [x, y] = queue.shift();
  if (x === n - 1 && y === m - 1) {
    console.log(visited[x][y]);
    return;
  }
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (visited[nx][ny] > 0) continue;
    if (board[nx][ny] === 0) continue;
    queue.push([nx, ny]);
    visited[nx][ny] = visited[x][y] + 1;
  }
}

//solve
