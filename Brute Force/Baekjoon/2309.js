const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const height = [];
for (let i = 0; i < 9; i++) height.push(parseInt(input[i]));

function check(answer, count, idx) {
  if (answer.length === 7 && count === 100) {
    console.log(answer.sort((a, b) => a - b).join("\n"));
    process.exit(0);
  }
  if (idx === 9 || answer.length >= 7) return false;
  //i번째 선택 o
  if (count + height[idx] <= 100) {
    answer.push(height[idx]);
    check(answer, count + height[idx], idx + 1);
    answer.pop();
  }
  // i번째 선택 x
  check(answer, count, idx + 1);
}
check([], 0, 0);

//solve
//재귀 바로 종료하고싶으면 process.exit()

//ref1 : 제외할 두명의 난쟁이를 이중 for문으로 결정
const sum = height.reduce((prev, curr) => prev + curr);
height.sort((a, b) => a - b);
loop: for (let i = 0; i < 8; i++) {
  for (let j = 1; j < 9; j++) {
    if (i === j) continue;
    if (sum - height[i] - height[j] === 100) {
      height.forEach((dward, idx) => {
        if (idx !== i && idx !== j) console.log(dward);
      });
      break loop;
    }
  }
}
