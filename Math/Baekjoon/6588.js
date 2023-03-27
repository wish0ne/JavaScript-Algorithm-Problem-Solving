const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const answer = [];
let i = 0;
const stack = [];
while (input[i] !== "0") {
  stack.push(parseInt(input[i]));
  i += 1;
}
const primes = SieveOfEratosthenes(Math.max(...stack));
loop1: for (let i = 0; i < stack.length; i++) {
  const n = stack[i];
  for (let j = 3; j < primes.length; j++) {
    if (primes[j] && primes[n - j]) {
      answer.push(`${n} = ${j} + ${n - j}`);
      continue loop1;
    }
  }
  answer.push("Goldbach's conjecture is wrong.");
}
console.log(answer.join("\n"));

function SieveOfEratosthenes(maxNumber) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  // 2 ~ maxNumber까지 확인
  for (let number = 2; number <= Math.sqrt(maxNumber); number += 1) {
    //number가 소수인 경우 (남은 수)
    if (isPrime[number] === true) {
      primes.push(number);

      let nextNumber = number * number;

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return isPrime;
}
//solve

//ref1 : 가능한 최대 숫자까지 소수를 구해버리면 최대값을 구할 필요 없음
const isPrime = SieveOfEratosthenes(1000001);
let index = 0;
const answer2 = [];
while (true) {
  const n = parseInt(input[index]);
  if (n === 0) break;
  let flag = false;
  for (let x = 3; x < n; x++) {
    if (isPrime[x] && isPrime[n - x]) {
      answer2.push(`${n} = ${x} + ${n - x}`);
      flag = true;
      break;
    }
  }
  if (!flag) answer2.push("Goldbach's conjecture is wrong.");
  index += 1;
}
console.log(answer2.join("\n"));
