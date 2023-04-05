const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
let [r, c, d] = input[1].split(" ").map(Number);
//방향 0,1,2,3 : 북, 동, 남, 서
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const board = [];
for (let i = 2; i <= n + 1; i++) {
  board.push(input[i].split(" ").map(Number));
}

let count = 0;
//0 : 미청소, 1: 벽, 2: 청소완료
while (true) {
  //1. 현재 칸이 청소되지 않은 경우, 현재 칸 청소
  if (board[r][c] === 0) {
    count += 1;
    board[r][c] = 2;
  }
  //2. 주위 4 칸 중 미청소 칸 없는 경우
  if (!around(r, c)) {
    // 방향 유지한채로 후진 가능하면 후진 후 1번으로 돌아감
    let nx = r - dx[d];
    let ny = c - dy[d];
    if (board[nx][ny] !== 1) {
      r = nx;
      c = ny;
      continue;
    }
    // 후진 불가능하면 stop
    console.log(count);
    return;
  }
  //3. 주위 4칸 중 미청소 칸 존재
  else {
    //반시계 방향으로 90도 회전
    d -= 1;
    if (d < 0) d = 3;
    //앞쪽칸이 미청소칸이라면 한칸 전진
    let nx = r + dx[d];
    let ny = c + dy[d];
    if (board[nx][ny] === 0) {
      r = nx;
      c = ny;
    }
    continue;
  }
}

function around(x, y) {
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (board[nx][ny] === 0) return true;
  }
  return false;
}

//solve
