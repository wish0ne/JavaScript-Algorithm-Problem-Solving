const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const k = BigInt(input[0]);
console.log(solution(k).toString());

function solution(k) {
  if (k === 1n) return 0n;
  let max = 1n;
  while (max * 2n < k) max *= 2n;
  let prev = solution(k - max);
  return 1n - prev;
}

//solve
//분할정복 규칙 찾기 어렵다
