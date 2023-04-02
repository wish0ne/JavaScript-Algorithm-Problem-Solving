const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m, v] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
for (let i = 1; i <= n; i++) graph[i].sort((a, b) => a - b);

const answer = [];
dfs(v, new Array(n + 1).fill(false), answer);
console.log(answer.join(" "));
console.log(bfs(v));

function dfs(v, visited, answer) {
  visited[v] = true;
  answer.push(v);
  for (let i of graph[v]) {
    if (!visited[i]) {
      dfs(i, visited, answer);
    }
  }
}

function bfs(v) {
  const visited = new Array(n + 1).fill(false);
  const answer = [];
  const queue = [v];
  visited[v] = true;
  while (queue.length > 0) {
    const x = queue.shift();
    answer.push(x);
    for (let i of graph[x]) {
      if (!visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
  return answer.join(" ");
}

//solve
