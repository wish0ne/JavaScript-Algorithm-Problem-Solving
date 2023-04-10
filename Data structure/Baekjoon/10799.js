const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const problem = input[0].split('');
const n = problem.length;
const laser = [];
const sticks = [];
let stick_count = 0; //현재 stick 수
let total_count = 0; //총 stick 수

let index = 0;
let i = 0;
while(index < n){
    if (index < n-1 && problem[index]==='(' && problem[index+1]===')'){
        laser.push(i);
        i+=1;
        index+=1;
    }
    else if (problem[index] === '('){
        stick_count += 1;
        i+=1;
    }
    else if (problem[index]===')'){
        stick_count -= 1;
        total_count += 1;
        i+=1;
    }
    index+=1;
    sticks.push(stick_count);
}

let answer = total_count;
laser.forEach((l)=>{
    answer += sticks[l];
})
console.log(answer);

//ref : https://junghyeonsu.tistory.com/248