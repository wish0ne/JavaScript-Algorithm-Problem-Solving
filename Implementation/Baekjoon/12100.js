const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const board = [];
for(let i=1; i<=n; i++) board.push(input[i].split(" ").map(Number));

const dx = [1, -1, 0, 0]; // 아래, 위, 오른쪽, 왼쪽
const dy = [0, 0, 1, -1];

let answer = 0;
solve(0, board);
console.log(answer);
function solve(i, board){
    if(i>=5){
       let max = findMax(board);
       answer = Math.max(max, answer);
       return;
    }
    for(let k=0; k<4; k++){
        const temp = [];
        for(let i=0; i<n; i++) temp.push([...board[i]]);
        start(temp, k);
        solve(i+1, temp);
    }
}

function findMax(board){
    let max = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            max = Math.max(max, board[i][j]);
        }
    }
    return max;
}

function start(board, d){
    if(d===0) move_down(board, 0);
    else if(d===1) move_up(board, 1);
    else if(d===2) move_right(board, 2);
    else move_left(board,3);
}

function move_right(board, d){
    const merge = [];
    for(let i=0; i<n; i++) merge.push(new Array(n).fill(false));
    
    for(let i=0; i<n; i++){
        for(let j=n-1; j>=0; j--){
            move(board, i, j, d, merge);
        }
    }
}

function move_down(board, d){
    const merge = [];
    for(let i=0; i<n; i++) merge.push(new Array(n).fill(false));
    
    for(let i=n-1; i>=0; i--){
        for(let j=n-1; j>=0; j--){
            move(board, i, j, d, merge);
        }
    }
}

function move_up(board, d){
    const merge = [];
    for(let i=0; i<n; i++) merge.push(new Array(n).fill(false));
    
    for(let i=0; i<n; i++){
        for(let j=n-1; j>=0; j--){
            move(board, i, j, d, merge);
        }
    }
}

function move_left(board, d){
    const merge = [];
    for(let i=0; i<n; i++) merge.push(new Array(n).fill(false));
    
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            move(board, i, j, d, merge);
        }
    }
}

function move(board, i, j, d, merge){
    if(board[i][j]===0) return;
    //nx, ny : 최대 이동할 수 있는 범위
    //bx, by : 합칠 블록
    let nx = i;
    let ny = j;
    while(true){
        if(nx+dx[d]<0 || nx+dx[d]>=n || ny+dy[d]<0 || ny+dy[d]>=n) break;
        if(board[nx+dx[d]][ny+dy[d]]!==0) break;
        nx += dx[d];
        ny += dy[d];
    }
    let bx = nx + dx[d];
    let by = ny + dy[d];
    if(bx<0 || bx>=n || by<0 || by>=n){
        if(nx===i && ny===j) return;
        board[nx][ny] = board[i][j];
        board[i][j] = 0;
        return;
    }
    if(board[bx][by]===board[i][j] && !merge[bx][by]){
        merge[bx][by] = true;
        board[bx][by] *= 2;
        board[i][j] = 0;
    }
    else if (nx===i && ny ===j) return;
    else{
        board[nx][ny] = board[i][j];
        board[i][j] = 0;
    }
}

//각 방향으로 움직일때 이중for문 시작점이 다른데 항상 (0,0)~(n,n)순으로 시작해서 오답 ㅜ