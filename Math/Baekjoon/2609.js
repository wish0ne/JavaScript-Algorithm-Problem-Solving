const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);

const GCD = (a, b) => {
  return b === 0 ? a : GCD(b, a % b);
};

const LCM = (a, b) => {
  return (a * b) / GCD(a, b);
};
console.log(GCD(a, b));
console.log(LCM(a, b));
