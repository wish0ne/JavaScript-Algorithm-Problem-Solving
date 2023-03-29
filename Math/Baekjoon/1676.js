const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
function factorial(x) {
  let result = 1n;
  for (let i = 2; i <= x; i++) result *= BigInt(i);
  return result;
}
let result = factorial(n);
let count = 0;
while (result % BigInt(10) === 0n) {
  count += 1;
  result /= BigInt(10);
}
console.log(count);

//solve
