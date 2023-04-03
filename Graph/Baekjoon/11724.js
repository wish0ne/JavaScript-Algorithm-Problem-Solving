const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);

for (let i = 1; i <= m; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = new Array(n + 1).fill(false);
let answer = 0;

for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    answer += 1;
  }
}
console.log(answer);

function dfs(v) {
  visited[v] = true;
  for (let i of graph[v]) {
    if (!visited[i]) dfs(i);
  }
}

//solve
