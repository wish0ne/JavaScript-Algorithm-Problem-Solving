/**
 * 1부터 maxNumber까지 모든 소수 찾기
 *
 * @param {number} maxNumber
 * 체크할 범위
 * @return {number[]}
 * 소수 배열
 */
export default function SieveOfEratosthenes(maxNumber) {
  const isPrime = new Array(maxNumber + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  const primes = [];

  // 2 ~ maxNumber의 제곱근까지 확인
  for (let number = 2; number <= Math.sqrt(maxNumber); number += 1) {
    //number가 소수인 경우 (남은 수)
    if (isPrime[number] === true) {
      primes.push(number);

      /*
       * Optimisation.
       * Start marking multiples of `p` from `p * p`, and not from `2 * p`.
       * The reason why this works is because, at that point, smaller multiples
       * of `p` will have already been marked `false`.
       *
       * Warning: When working with really big numbers, the following line may cause overflow
       * In that case, it can be changed to:
       * let nextNumber = 2 * number;
       */

      //number를 제외한 number의 배수 모두 지우기
      let nextNumber = number * number; // 2 * number 안해도 되는 이유 ^

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false;
        nextNumber += number;
      }
    }
  }

  return primes;
}
