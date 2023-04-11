const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

let count = 0;
for (let h = 0; h <= n; h++) {
  for (let m = 0; m < 60; m++) {
    for (let s = 0; s < 60; s++) {
      if (
        (
          h.toString().padStart(2, "0") +
          m.toString().padStart(2, "0") +
          s.toString().padStart(2, "0")
        ).includes(k)
      )
        count += 1;
    }
  }
}
console.log(count);

//solve
