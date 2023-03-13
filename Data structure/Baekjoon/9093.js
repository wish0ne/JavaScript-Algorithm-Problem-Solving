const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);
const answer = [];
for (let i = 1; i <= t; i++) {
  const words = input[i].split(" ");
  const temp = [];
  words.forEach((word) => {
    temp.push(word.split("").reverse().join(""));
  });
  answer.push(temp.join(" "));
}
console.log(answer.join("\n"));

//solve

// answer2
// reverse 안써서 시간 단축
const answer2 = [];
for (let i = 1; i <= t; i++) {
  const words = input[i].split(" ");
  const temp = [];
  words.forEach((word) => {
    let reverse = "";
    for (let j = word.length - 1; j >= 0; j--) {
      reverse += word[j];
    }
    temp.push(reverse);
  });
  answer2.push(temp.join(" "));
}
console.log(answer2.join("\n"));

// ref1
// reverse를 두 번 하면 원상복구되는 점 이용
const answer3 = [];
for (let i = 1; i <= t; i++) {
  answer3.push(
    input[i].split("").reverse().join("").split(" ").reverse().join(" ")
  );
}
console.log(answer3.join("\n"));
