const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

let [n, m, x, y, k] = input[0].split(" ").map(Number);
const map = [];
for (let i = 1; i <= n; i++) map.push(input[i].split(" ").map(Number));
const commands = input[n + 1].split(" ").map(Number);

const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];

const dice = {
  top: 0,
  front: 0,
  back: 0,
  right: 0,
  left: 0,
  bottom: 0,
};
const answer = [];
for (let c of commands) {
  let nx = x + dx[c];
  let ny = y + dy[c];
  if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

  roll(c);
  //주사위 숫자 복사
  if (map[nx][ny] === 0) {
    map[nx][ny] = dice.bottom;
  } else {
    dice.bottom = map[nx][ny];
    map[nx][ny] = 0;
  }
  answer.push(dice.top);
  x = nx;
  y = ny;
}
console.log(answer.join("\n"));

function roll(c) {
  let { top, front, back, right, left, bottom } = dice;
  let temp = top;
  //동쪽
  if (c === 1) {
    top = left;
    left = bottom;
    bottom = right;
    right = temp;
  }
  //서쪽
  else if (c === 2) {
    top = right;
    right = bottom;
    bottom = left;
    left = temp;
  }
  //북쪽
  else if (c === 3) {
    top = front;
    front = bottom;
    bottom = back;
    back = temp;
  }
  //남쪽
  else {
    top = back;
    back = bottom;
    bottom = front;
    front = temp;
  }
  dice.top = top;
  dice.back = back;
  dice.bottom = bottom;
  dice.front = front;
  dice.left = left;
  dice.right = right;
}

//solve
