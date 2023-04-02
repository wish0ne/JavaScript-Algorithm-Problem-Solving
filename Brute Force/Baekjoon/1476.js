const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [E, S, M] = input[0].split(" ").map(Number);

let e = 0;
let s = 0;
let m = 0;
for (let i = 1; i <= 7980; i++) {
  e = (e % 15) + 1;
  s = (s % 28) + 1;
  m = (m % 19) + 1;
  if (e === E && s === S && m === M) {
    console.log(i);
    break;
  }
}

//solve
//nodejs 이상한 메모리제한 걸려있어서 파이썬으로 제출함 우씨

//ref1
// 답 x는 15로 나누면 나머지가 E, 28로 나누면 나머지가 S, 19로 나누면 나머지가 M
// => x-E는 15로 나누면 나머지가 0, x-S는 28로 나누면 나머지가 0, ...
let answer = 1;
while (true) {
  if (
    (answer - E) % 15 === 0 &&
    (answer - S) % 28 === 0 &&
    (answer - M) % 19 === 0
  ) {
    console.log(answer);
    break;
  }
  answer += 1;
}
