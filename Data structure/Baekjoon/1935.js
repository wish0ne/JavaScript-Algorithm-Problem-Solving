const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const calc = input[1].split('');
const numbers = new Array(n);
for(let i=2; i<n+2; i++){
    numbers[i-2] = parseInt(input[i]);
}
const stack = [];
calc.forEach((char)=>{
    //알파벳
    if(char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)){
        stack.push(numbers[char.charCodeAt(0) - 'A'.charCodeAt(0)]);
    }
    //기호
    else{
        const right = stack.pop();
        const left = stack.pop();
        if(char==='+'){
            stack.push(left + right);
        }
        else if (char === '-'){
            stack.push(left - right);
        }
        else if (char === '*'){
            stack.push( left * right);
        }
        else if (char === '/'){
            stack.push(left / right);
        }
    }
})

console.log(stack[0].toFixed(2))

//solve