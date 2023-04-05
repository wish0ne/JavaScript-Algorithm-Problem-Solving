const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const lab = [];
for (let i = 1; i <= n; i++) lab.push(input[i].split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

//3단계 반복
//1. 벽 3개 설치
//2. 바이러스 전파
//3. 안전영역 개수 세기
const virus = [];
const empty = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (lab[i][j] === 2) virus.push([i, j]);
    else if (lab[i][j] === 0) empty.push([i, j]);
  }
}

let max = 0;
for (let i = 0; i < empty.length; i++) {
  lab[empty[i][0]][empty[i][1]] = 1;
  for (let j = i + 1; j < empty.length; j++) {
    lab[empty[j][0]][empty[j][1]] = 1;
    for (let k = j + 1; k < empty.length; k++) {
      lab[empty[k][0]][empty[k][1]] = 1;
      let count = propagation();
      max = Math.max(max, count);
      lab[empty[k][0]][empty[k][1]] = 0;
    }
    lab[empty[j][0]][empty[j][1]] = 0;
  }
  lab[empty[i][0]][empty[i][1]] = 0;
}

console.log(max);

function propagation() {
  const visited = [];
  const temp = [];
  for (let i = 0; i < n; i++) {
    temp.push([...lab[i]]);
    visited.push(new Array(m).fill(false));
  }
  virus.forEach((v) => {
    const [x, y] = v;
    dfs(x, y, visited);
  });
  let safe = count(temp);
  return safe;

  function dfs(x, y, visited) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      if (visited[nx][ny]) continue;
      if (temp[nx][ny] === 1) continue;
      temp[nx][ny] = 2;
      dfs(nx, ny, visited);
    }
  }
}

function count(temp) {
  let safe = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] === 0) safe += 1;
    }
  }
  return safe;
}

//solve
