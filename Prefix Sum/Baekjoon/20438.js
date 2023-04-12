const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, k, q, m] = input[0].split(" ").map(Number); //학생수, 조는 학생 수, 출석코드 보낼 학생 수, 구간 수
const sleep = input[1].split(" ").map(Number); //졸고있는 학생 번호
const codes = input[2].split(" ").map(Number); //출석코드 받을 학생 번호

const students = new Array(n + 3).fill(0);
sleep.forEach((s) => (students[s] = -1)); // ✅ 졸고있는 학생은 다음 학생에게 전달하지 못하므로 미리 체크해놔야함
codes.forEach((c) => {
  let i = c;
  if (students[i] < 0) return; // ✅ 전달 -> 전달이 아닌 코드받은 학생이 모든 배수학생들에게 뿌리는것!
  while (i < n + 3) {
    students[i] = 1;
    i += c;
  }
});
sleep.forEach((s) => (students[s] = -1)); // ✅ 졸고있는 학생이 전달해서 코드를 받았더라도 출석하지 못하므로 다시 체크
//누적합 계산
const sum = new Array(n + 3).fill(0);
for (let i = 3; i < n + 3; i++) {
  if (students[i] > 0) sum[i] = sum[i - 1];
  else sum[i] = sum[i - 1] + 1;
}
const answer = [];
for (let i = 3; i < 3 + m; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  answer.push(sum[e] - sum[s - 1]);
}
console.log(answer.join("\n"));

//반례가 많다...
