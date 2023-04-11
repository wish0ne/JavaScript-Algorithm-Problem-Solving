const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function (){
  solution(input);
  process.exit();
});

function solution(input){
    const n = parseInt(input[0]);
    const products = [];
    for(let i=1; i<=n; i++){
        products.push(parseInt(input[i]));
    }
    
    products.sort((a,b)=>b-a);
    let answer = 0;
    for(let i=0; i<parseInt(n/3) * 3; i+=3){
        answer += products[i] + products[i+1];
    }
    for(let i=parseInt(n/3)*3; i<n; i++) answer+=products[i];
    console.log(answer);
}

//solve
//js EACCES는 readline으로 input받기