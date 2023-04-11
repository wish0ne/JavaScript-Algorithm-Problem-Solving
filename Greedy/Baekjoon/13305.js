const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const road = input[1].split(" ").map(BigInt);
const city = input[2].split(" ").map(BigInt);

let min = BigInt(city[0]);
let answer = 0n;
for(let i=0; i<n-1; i++){
    if(BigInt(city[i])<min) min = BigInt(city[i]);
    answer += min * road[i];
}

console.log(answer.toString());