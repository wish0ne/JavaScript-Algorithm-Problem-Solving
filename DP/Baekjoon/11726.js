const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const d = new Array(n + 1).fill(0);
d[1] = 1;
d[2] = 2;

for (let i = 3; i <= n; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 10007; // * 매번 나머지 연산 해줘야 값이 number 범위를 넘지 않아 오차 생기지 않음
}

console.log(d[n] % 10007);

// 🥺
// 점화식 An = An-1 + An-2 못찾음...
// 점화식 이해 : https://duckracoon.tistory.com/entry/%EB%B0%B1%EC%A4%80-11726-2xn-%ED%83%80%EC%9D%BC%EB%A7%81-%ED%95%B4%EC%84%A4-python

// DP 연습 필요
