const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

//위, 오른쪽, 아래, 왼쪽
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const n = parseInt(input[0]);
const k = parseInt(input[1]);
const board = [];
for(let i=0; i<n; i++) board.push(new Array(n).fill(0));
//0 : 빈칸, 1: 뱀, 2: 사과

const snake = [];
snake.push([0, 0]);
for(let i=2; i<=k+1; i++){
    const [a, b] = input[i].split(" ").map(Number);
    board[a-1][b-1] = 2;
}
board[0][0] = 1;

const rotation = [];
const l = parseInt(input[2+k]);
for(let i=k+3; i<k+3+l; i++){
    const [x, c] = input[i].split(" ");
    rotation.push([parseInt(x), c]);
}
solve(1,1);

function solve(time, d){
    const headx = snake[0][0] + dx[d];
    const heady = snake[0][1] + dy[d];
    if(headx<0 || headx>=n || heady<0 || heady>=n){
        console.log(time);
        process.exit();
    }
    if(board[headx][heady]===1){
        console.log(time);
        process.exit();
    }

    snake.unshift([headx, heady]);
    //사과 안먹는 경우
    if(board[headx][heady]===0){
        const [x, y] = snake.pop();
        board[x][y] = 0;
    }
    board[headx][heady] = 1;

    //회전
    if(rotation.length>0 && rotation[0][0] === time){
        if(rotation[0][1] === 'L') d-=1;
        else if(rotation[0][1] === 'D') d+=1;
        
        if(d<0) d = 3;
        if(d>3) d = 0;
        rotation.shift();
    }
    solve(time+1, d);
}