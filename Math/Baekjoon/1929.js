const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [m, n] = input[0].split(" ").map(Number);
const primes = SieveOfEratosthenes(n);
console.log(primes.filter((prime) => prime >= m).join("\n"));

function SieveOfEratosthenes(maxNumber) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  for (let number = 2; number <= maxNumber; number += 1) {
    //number가 소수인 경우 (남은 수)
    if (isPrime[number] === true) {
      primes.push(number);

      //number를 제외한 number의 배수 모두 지우기
      let nextNumber = number * number;

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return primes;
}
