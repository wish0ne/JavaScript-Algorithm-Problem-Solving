const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const problem = input[0].split('');
const stack = [];
const pair = [];
for(let i=0; i<problem.length; i++){
    if(problem[i] === '(') stack.push(i);
    else if (problem[i]===')') pair.push([stack.pop(), i]);
}

let answer = new Set();
function solve(i, str){
    if(i>=pair.length){
        answer.add(str.join(''));
        return;
    }
    //i번째 쌍 넣지 않는 경우
    const [l, r] = pair[i];
    const temp = [...str];
    temp[l] = '';
    temp[r] = '';
    solve(i+1, temp)
    //i번째 쌍 넣는 경우
    solve(i+1, str);
}
solve(0, [...problem]);
answer = Array.from(answer);
answer.pop()
console.log(answer.sort().join('\n'))

//반례 : 다른 괄호 쌍 제거해도 같은 결과 나올 수 있음
//중복되는 경우 존재하므로 떄문에 set 이용해야함