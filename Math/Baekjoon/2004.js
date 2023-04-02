const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

// n! / m! / (n-m)!
console.log(
  Math.min(
    count(n, 2) - count(m, 2) - count(n - m, 2),
    count(n, 5) - count(m, 5) - count(n - m, 5)
  )
);

function count(n, x) {
  let count = 0;
  for (let i = x; i <= n; i *= x) {
    count += parseInt(n / i);
  }
  return count;
}

/** not solve!! */
// 시간초과를 위해서는 팩토리얼 계산을 하지 않고 소인수분해했을때 2와 5의 개수를 구해서 최소값을 반환하는것까진 생각했으나... 어케 효율적으로 계산하는지 몰랐음

//!팩토리얼 게산에서 소인수 개수 구하는 알고리즘 기억하기
//ref : https://www.acmicpc.net/board/view/72777
