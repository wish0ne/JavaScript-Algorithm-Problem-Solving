const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);
const classification = [];
const answer = [];
for(let i=1; i<=n; i++){
    const [key, value] = input[i].split(' ');
    classification.push([key, parseInt(value)]);
}
classification.sort((a,b)=>a[1] - b[1]);

for(let i=n+1; i<=n+m; i++){
    const number = parseInt(input[i]);
    binary_search(0, n-1, number);
}
console.log(answer.join('\n'))

function binary_search(start, end, target){
    let result;
    while(start<=end){
        let mid = parseInt((start + end) / 2);
        if(target <= classification[mid][1]){
            result = classification[mid][0];
            end = mid - 1;
        }
        else{
            start = mid + 1;
        }
    }
    answer.push(result);
}

//이진탐색 쓸생각 못함 ㅜㅜ 시간초과나면 이진탐색 생각해보자!
