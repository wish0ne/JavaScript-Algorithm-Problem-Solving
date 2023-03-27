const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const words = input[0].split("");
const m = parseInt(input[1]);
const queue = [];
for (let i = 2; i <= m + 1; i++) {
  console.log(words, queue);
  const [command, char] = input[i].split(" ");
  switch (command) {
    case "P":
      words.push(char);
      break;
    case "L":
      if (words.length > 0) {
        queue.push(words.pop());
      }
      break;
    case "D":
      if (queue.length > 0) {
        words.push(queue.pop());
      }
      break;
    case "B":
      if (words.length > 0) words.pop();
      break;
  }
}

console.log(words.join("") + queue.reverse().join("")); //reverse하지 않고 queue를 words에 하나씩 push한다음 출력해도됨

//solve
//submit1 : splice 이용 (시간초과)
//submit2 : stack 성질 이용하여 시간단축
