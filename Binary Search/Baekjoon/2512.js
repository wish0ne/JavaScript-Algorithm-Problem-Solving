const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const numbers = input[1].split(" ").map(Number);
const m = parseInt(input[2]);

const sum = numbers.reduce((prev, curr)=>prev+curr);
if(sum <= m){
    console.log(Math.max(...numbers));
    return;
}

let answer = 0;
binary_search(1, Math.max(...numbers));
console.log(answer);

//상한액 이분탐색
function binary_search(start, end){
    while(start <= end){
        let mid = parseInt((start + end) / 2);
        const [sum, max] = calc(mid);
        if(sum <= m){
            answer = Math.max(answer, max);
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
        
    }
}

function calc(top){
    let max = top;
    let sum = 0;
    for (let price of numbers){
        if(price <= top){
            sum += price;
            max = Math.max(max, price);
        }
        else{
            sum += top;
        }
    }
    return [sum, max];
}
//solve