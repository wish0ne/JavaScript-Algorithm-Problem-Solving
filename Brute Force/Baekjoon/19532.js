const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [a, b, c, d, e, f] = input[0].split(" ").map(Number);
for (let x = -999; x < 1000; x++) {
  for (let y = -999; y < 1000; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(x, y);
      return;
    }
  }
}

//하나의 식을 이용해 변수를 줄인 후 나머지 식이 성립하는지 확인하면서 풀었는데 계속 오답!
//뭔가 나누는 수가 0이 된다던지 하는 케이스때문에 반례가 생기나봄. 그냥 쉽게쉽게 이중for문 쓰쟈
