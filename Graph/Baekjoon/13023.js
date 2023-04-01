const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = new Array(n);
for (let i = 0; i < n; i++) graph[i] = [];

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 0; i < n; i++) {
  const visited = new Array(n).fill(0);
  visited[i] = 1;
  if (dfs(i, visited)) {
    console.log(1);
    return;
  }
}
console.log(0);

function dfs(x, visited) {
  if (visited[x] === 5) return true;
  for (let i of graph[x]) {
    if (!visited[i]) {
      const temp = visited[i];
      visited[i] = visited[x] + 1;
      if (dfs(i, visited)) return true;
      visited[i] = temp;
    }
  }
}

//solve
//문제 이해가 어려웠음 ㅜ
