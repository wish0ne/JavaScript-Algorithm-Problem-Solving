const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const wheels = [];
for(let i=0; i<4; i++){
    wheels.push(input[i].split("").map(Number));
}
const k = parseInt(input[4]);

for(let i=5; i<k+5; i++){
    const [n, d] = input[i].split(' ').map(Number);
    rotation(n-1, d);
}
let score = 0;
wheels.forEach((wheel, idx)=>{
    if(wheel[0]===1) score += Math.pow(2, idx); 
})
console.log(score);


function rotation(number, d){
    const rotate = [[number, d]];
    let nd = d;

    //왼쪽
    for(let i=number; i>0; i--){
            if(wheels[i-1][2]!==wheels[i][6]){
                nd *= -1;
                rotate.push([i-1, nd]);
            }
            else break;

    }
    //오른쪽
    nd = d;
    for(let i=number; i<3; i++){
            if(wheels[i+1][6]!==wheels[i][2]){
                nd *= -1;
                rotate.push([i+1, nd]);
            }
            else break;
   
    }
    rotate.forEach((r)=>{
        if(r[1]===1) rotation_right(r[0]);
        else rotation_left(r[0]);
    })
}

//시계방향
function rotation_right(number){
    wheels[number].unshift(wheels[number].pop());
}

//반시계방향
function rotation_left(number){
    wheels[number].push(wheels[number].shift());
}

//문제 이해를 잘하자... 한번에 하나씩 회전하는게 아니라 동시에 회전하는것!