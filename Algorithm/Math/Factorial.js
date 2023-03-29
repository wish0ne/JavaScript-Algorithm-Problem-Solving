/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}

/**
 * @param {number} number
 * @return {number}
 */
export default function factorialRecursive(number) {
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
  }