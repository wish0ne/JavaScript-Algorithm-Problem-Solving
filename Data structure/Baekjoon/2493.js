const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const heights = input[1].split(" ").map((h, idx) => [parseInt(h), idx + 1]);
const stack = [];
const answer = new Array(n).fill(0);
while (heights.length > 0) {
  const [value, idx] = heights.pop();
  while (stack.length > 0 && stack[stack.length - 1][0] < value) {
    const [v, id] = stack.pop();
    answer[id - 1] = idx;
  }
  stack.push([value, idx]);
}
console.log(answer.join(" "));

//처음엔 투포인터로 생각했다가 반례있어서 틀림
//value 숫자로 변환안해줘서 비교 제대로 안됨
