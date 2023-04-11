const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const board = [];
for (let i = 1; i <= n; i++) board.push(input[i].split("").map(Number));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const visited = new Array(n);
for (let i = 0; i < n; i++) visited[i] = new Array(n).fill(false);

const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (board[i][j] === 1 && !visited[i][j]) {
      answer.push(dfs(i, j, 0));
    }
  }
}

console.log(answer.length);
console.log(answer.sort((a, b) => a - b).join("\n"));

function dfs(x, y, count) {
  visited[x][y] = true;
  count += 1;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (visited[nx][ny]) continue;
    if (board[nx][ny] === 0) continue;
    count = dfs(nx, ny, count);
  }
  return count;
}
