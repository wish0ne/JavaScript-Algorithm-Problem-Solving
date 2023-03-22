const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const numbers = input[1].split(" ").map(Number);

let answer = 0;
numbers.forEach((number) => {
  if (isPrime(number)) answer += 1;
});
console.log(answer);

/**
 * x가 소수인지 아닌지 판별
 *
 * @param {number} x
 * 소수인지 체크할 숫자
 * @return {boolean}
 * 소수인지 여부
 */
function isPrime(x) {
  if (x < 2) return false;
  // 2부터 x의 제곱근까지 모든 수를 확인하며
  for (let i = 2; i < parseInt(Math.sqrt(x)) + 1; i++) {
    //x가 해당 수로 나누어떨어진다면
    if (x % i === 0) return false; //소수가 아님
  }
  return true; //소수임
}

//solve
