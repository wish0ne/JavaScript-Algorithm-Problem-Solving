import GCD from "./GCD";

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

export default function LCM(a, b) {
  return a === 0 || b === 0 ? 0 : Math.abs(a * b) / GCD(a, b);
}
