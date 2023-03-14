/**
 * input numbers should be positive
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function GCD(a, b) {
  // modulo 연산의 값이 0이 되는 시점에서 나누는 값이 최대공약수
  return b === 0 ? a : GCD(b, a % b);
}
