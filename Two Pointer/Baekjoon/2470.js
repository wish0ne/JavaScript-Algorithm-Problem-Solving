const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const numbers = input[1].split(' ').map(Number);
numbers.sort((a,b)=>a-b);

let min = Math.abs(numbers[0] + numbers[n-1]);
const answer = [numbers[0], numbers[n-1]];
for(let i=0; i<n; i++){
    let start = i+1;
    let end = n-1;
    while(start<=end){
        let mid = parseInt((start + end) / 2);
        let now = Math.abs(numbers[mid] + numbers[i]);
        if(Math.abs(numbers[mid] + numbers[i]) < min){
            min = Math.abs(numbers[mid] + numbers[i]);
            answer[0] = numbers[i];
            answer[1] = numbers[mid];
        }
        if(mid===1 || now < Math.abs(numbers[i] + numbers[mid - 1])){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }

}

console.log(answer[0], answer[1]);

//너무 어렵다 흑흑
//이분탐색을 쓸 생각도 못했고 + 이분탐색 썼을떄 어떤상황에서 왼/오른쪽으로 이동할지 제대로 생각못함
//투포인터 방법이 더 쉬운데도 생각못함!!
//=> 기준을 잘 못 생각함. sum이 0에 가까워져야한다고 생각해야하는데 두 수의 차가 최소가 되는걸로 생각하다 보니...
//sum이 0이면 break, 양수면 수를 줄여야하므로 왼쪽 / 음수면 수를 늘려야하므로 오른쪽으로 이동한다는 기준을 세울 수 있음


//ref : 투포인터 or 이분탐색
//이분탐색이 꼭 mid를 생성해야한다는 생각은 버리자...
let left = 0;
let right = n-1;
const answer2  = [Infinity, left, right];
while(left < right){
    let sum = numbers[left] + numbers[right];
    if(Math.abs(sum) < answer2[0]){
        answer2[0] = Math.abs(sum);
        answer2[1] = numbers[left];
        answer2[2] = numbers[right];
    }
    if(sum > 0) right -= 1;
    else if (sum < 0) left += 1;
    else break;
}
console.log(answer2[1], answer2[2]);