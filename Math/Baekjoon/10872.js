const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
function factorial(x) {
  if (x === 0) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(n));

//solve
// x가 1일때도 return 1 하는게 효율적
