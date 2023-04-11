const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const problem = input[0].split('');

function solve(){
    const stack = [];
    for(let p of problem){
        if(p==='(') stack.push('(');
        else if (p===')'){
            if(stack.length===0) return 0;
            if(stack[stack.length-1]==='('){
                stack.pop();
                stack.push(2);
            }
            else if (/[0-9]+/.test(stack[stack.length-1])){
                let number = stack.pop() * 2;
                if(stack.length<1 || stack[stack.length-1]!=='(') return 0;
                stack.pop();
                stack.push(number);
            }
            else return 0;
        }
        else if (p==='[') stack.push('[')
        else if (p===']'){
            if(stack.length ===0) return 0;
            if(stack[stack.length-1]==='['){
                stack.pop();
                stack.push(3);
            }
            else if (/[0-9]+/.test(stack[stack.length-1])){
                let number = stack.pop() * 3;
                if(stack.length<1 || stack[stack.length-1]!=='[') return 0;
                stack.pop();
                stack.push(number);
            }
            else return 0;
        }
        else return 0;
        //연속된 숫자 더하기
        while(stack.length>1 && /[0-9]+/.test(stack[stack.length-1])){
            if(!/[0-9]+/.test(stack[stack.length-2])) break;
            let number = stack.pop();
            number += stack.pop();
            stack.push(number);
        }
    }
    if(stack.length!==1) return 0;
    if(!/[0-9]+/.test(stack[0])) return 0;
    return stack[0];
}

console.log(solve());

//맞왜틀 1시간 ㅋㅋㅜㅜ forEach 때문이였다니
// ✅ forEach안의 return은 continue처럼 동작!!