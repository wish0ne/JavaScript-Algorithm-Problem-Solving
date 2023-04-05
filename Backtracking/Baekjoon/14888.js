const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const numbers = input[1].split(" ").map(Number);
let [plus, minus, multiple, divide] = input[2].split(" ").map(Number);

let max = -1000000001;
let min = 1000000001;
solve(1, numbers[0]);
function solve(i, answer) {
  if (i === n) {
    max = Math.max(answer, max);
    min = Math.min(answer, min);
    return;
  }
  if (plus > 0) {
    plus -= 1;
    solve(i + 1, answer + numbers[i]);
    plus += 1;
  }
  if (minus > 0) {
    minus -= 1;
    solve(i + 1, answer - numbers[i]);
    minus += 1;
  }
  if (multiple > 0) {
    multiple -= 1;
    solve(i + 1, answer * numbers[i]);
    multiple += 1;
  }
  if (divide > 0) {
    divide -= 1;
    solve(i + 1, parseInt(answer / numbers[i]));
    divide += 1;
  }
}

// ✅ js에서는 +0 -0이 출력됨 ㅜ.ㅜ
console.log(max ? max : 0);
console.log(min ? min : 0);
