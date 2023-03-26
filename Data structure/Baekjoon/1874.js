const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);

const stack = [];
let index = 1; //수열 index
let number = 1;
const answer = [];
while (index <= n) {
  if (stack[stack.length - 1] === parseInt(input[index])) {
    answer.push("-");
    stack.pop();
    index += 1;
  } else {
    stack.push(number);
    answer.push("+");
    number += 1;
  }

  if (stack[stack.length - 1] > parseInt(input[index])) break;
}

if (stack.length > 0) console.log("NO");
else console.log(answer.join("\n"));

//solve

//ref1
//새로 넣어야하는 값이 스택의 Top보다 크면 불가능
//넣고자 하는 값보다 작으면 push
//넣고자 하는 값과 동일하면 pop
let answer2 = "";
const stack2 = [];
let value = 1;
//넣고자 하는 값 : input[i]
for (let i = 1; i <= n; i++) {
  while (parseInt(input[i]) >= value) {
    stack2.push(value++); //✅ push 후 value+=1
    answer2 += "+\n";
  }

  if (stack2[stack2.length - 1] === parseInt(input[i])) {
    stack2.pop();
    answer2 += "-\n";
  } else if (stack2[stack2.length - 1] > parseInt(input[i])) {
    answer2 = "NO";
    break;
  }
}
console.log(answer2);
