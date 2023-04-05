const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const [n, m] = input[0].split(" ").map(Number);
const city = [];
for (let i = 1; i <= n; i++) city.push(input[i].split(" ").map(Number));

const houses = [];
const markets = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (city[i][j] === 1) houses.push([i, j]);
    else if (city[i][j] === 2) markets.push([i, j]);
  }
}

let answer = Number.MAX_SAFE_INTEGER;
close(0, []);
console.log(answer);
function close(i, selected) {
  if (selected.length === m) {
    let chicken = 0;
    houses.forEach(([x, y]) => (chicken += calc(x, y, selected)));
    answer = Math.min(answer, chicken);
    return;
  }
  if (i >= markets.length) return;
  selected.push(markets[i]);
  close(i + 1, selected);
  selected.pop();
  close(i + 1, selected);
}

function calc(sx, sy, selected) {
  let min = Number.MAX_SAFE_INTEGER;
  selected.forEach(([x, y]) => {
    min = Math.min(Math.abs(x - sx) + Math.abs(y - sy), min);
  });
  return min;
}

//최단거리 계산을 bfs로 하면 시간초과!! 🥺
