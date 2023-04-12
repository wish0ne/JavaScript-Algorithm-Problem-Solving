const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const number = input[0].split('').map(Number);
let answer = '';
number.forEach((n, idx)=>{
    if(idx===0) answer += n.toString(2);
    else answer += n.toString(2).padStart(3, '0')
})
console.log(answer.slice(answer.indexOf('1')));

//8진수를 2진수로 변환할떄는 8진수 한자리를 2진수 3자리로 변환하면 된다...