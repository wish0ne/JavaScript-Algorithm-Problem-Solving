const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const board = [];
let max_length = 0;
for (let i = 0; i < 5; i++) {
  board.push(input[i].split(""));
  max_length = Math.max(max_length, board[board.length - 1].length);
}
const answer = [];
let temp = "";
for (let j = 0; j < max_length; j++) {
  for (let i = 0; i < 5; i++) {
    if (board[i].length > j) temp += board[i][j];
  }
  answer.push(temp);
  temp = "";
}
console.log(answer.join(""));

//solve
//charAt() 사용하면 편리
//아님 걍 범위넘어가면 undefined이니까 undefined일때 조건처리하면 간단
