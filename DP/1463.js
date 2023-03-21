const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);

const dp = new Array(n + 1).fill(n);
dp[1] = 0;

for (let i = 1; i <= n; i++) {
  dp[i + 1] = Math.min(dp[i] + 1, dp[i + 1]);
  dp[i * 2] = Math.min(dp[i] + 1, dp[i * 2]);
  dp[i * 3] = Math.min(dp[i] + 1, dp[i * 3]);
}

console.log(dp[n]);

//solve (264ms, 76480KB)

//ref1~3 출처 : https://bio-info.tistory.com/159
//ref1 : bottom up (for문) (260ms, 17440KB)
const d = new Array(n + 1).fill(0);
for (let i = 2; i < n + 1; i++) {
  d[i] = d[i - 1] + 1;
  if (i % 2 === 0) d[i] = Math.min(d[i], d[i / 2] + 1);
  if (i % 3 === 0) d[i] = Math.min(d[i], d[i / 3] + 1);
}
console.log(d[n]);

//***ref2 : top down (재귀) (128ms, 9428KB)
const d2 = { 1: 0 }; //1이 1이 되기 위한 연산횟수 = 0
function solution(x) {
  if (d2[x] !== undefined) return d2[x]; // 종료 조건 : d2[x]가 존재할때
  if (x % 3 === 0 && x % 2 === 0)
    d2[x] = Math.min(solution(x / 3) + 1, solution(x / 2) + 1);
  else if (x % 3 === 0)
    d2[x] = Math.min(solution(x / 3) + 1, solution(x - 1) + 1);
  else if (x % 2 === 0)
    d2[x] = Math.min(solution(x / 2) + 1, solution(x - 1) + 1);
  else d2[x] = solution(x - 1) + 1;
  return d2[x];
}
console.log(solution(n));

//ref3 : BFS (124ms, 17168KB)
//BFS로 최단거리 구하듯이 계산
const queue = [];
queue.push(n);
const visited = new Array(n + 1).fill(0);
while (queue.length !== 0) {
  const c = queue.shift();
  if (c === 1) break;
  if (c % 3 === 0 && visited[c / 3] === 0) {
    queue.push(c / 3);
    visited[c / 3] = visited[c] + 1;
  }
  if (c % 2 === 0 && visited[c / 2] === 0) {
    queue.push(c / 2);
    visited[c / 2] = visited[c] + 1;
  }
  if (visited[c - 1] === 0) {
    queue.push(c - 1);
    visited[c - 1] = visited[c] + 1;
  }
}
console.log(visited[1]);
