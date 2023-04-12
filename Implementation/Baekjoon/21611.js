const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const dx = [-1, 1, 0, 0]; //위, 아래, 왼쪽, 오른쪽
const dy = [0, 0, -1, 1];

const [n, m] = input[0].split(" ").map(Number);
const [sharkX, sharkY] = [(n+1)/2 - 1, (n+1)/2 - 1];
//구슬 개수 보드
const board = [];
for(let i=1; i<=n; i++) board.push(input[i].split(" ").map(Number));

//번호 보드
const idx_board = [];
for(let i=1; i<=n; i++) idx_board.push(new Array(n).fill(0));

const answer = [0, 0, 0]; //번호별 폭발한 구슬 개수
for(let i=n+1; i<=n+m; i++){
    const [d, s] = input[i].split(" ").map(Number); //블리자드 방향, 거리
    start(d-1, s, answer);
}
console.log(answer[0] + 2 * answer[1] + answer[2] * 3);

function start(d, s){
    //1. 구슬 파괴
    destroy(d, s);
    //구슬 이동
    move();
    //2. 구슬 폭발
    let end = false;
    while(!end){
        end = bomb(answer);
        move();
    }
    //3. 구슬 변화
    change();
}

function destroy(d, s){
    let x = sharkX;
    let y = sharkY;
    for(let i=0; i<s; i++){
        let nx = x + dx[d];
        let ny = y + dy[d];
        if(nx<0 || nx>=n || ny<0 || ny>=n) break;
        board[nx][ny] = 0;
        x = nx;
        y = ny;
    }
};
function bomb(answer){
    let x = sharkX;
    let y = sharkY;
    let stack = [];
    let value = -1;
    let end = true;
    for(let i=1; i<n; i+=2){
        //왼쪽, 아래 홀수번씩 이동
        for(let j=0; j<i; j++){
            x += dx[2];
            y += dy[2];
            bomb_ball(x, y);
        }
        for(let j=0; j<i; j++){
            x += dx[1];
            y += dy[1];
            bomb_ball(x, y);
        }
        //오른쪽, 위 짝수번씩 이동
        for(let j=0; j<=i; j++){
            x += dx[3];
            y += dy[3];
            bomb_ball(x, y);
        }
        for(let j=0; j<=i; j++){
            x += dx[0];
            y += dy[0];
            bomb_ball(x, y);
        }
    }
    //마지막 왼쪽 이동 n-1번
    for(let j=0; j<n-1; j++){
        x += dx[2];
        y += dy[2];
        bomb_ball(x, y);
    }

    if(stack.length >=4) {
        end = false;
        stack.forEach((s)=>{
            answer[board[s[0]][s[1]]-1] += 1;
            board[s[0]][s[1]] = 0;
        })
    }

    function bomb_ball(x, y){
        if(board[x][y]===0){
            if(stack.length >=4) {
                end = false;
                stack.forEach((s)=>{
                    answer[board[s[0]][s[1]]-1] += 1;
                    board[s[0]][s[1]] = 0;
                })
            }
            value = 0;
            stack = []
            return;
        }
        if(board[x][y] === value){
            stack.push([x, y]);
        }
        else{
            if(stack.length >=4) {
                end = false;
                stack.forEach((s)=>{
                    answer[board[s[0]][s[1]]-1] += 1;
                    board[s[0]][s[1]] = 0;
                })
            }
            value = board[x][y];
            stack = [[x, y]];
        }

    }

    return end;
};
function change(){
    const group = grouping();
    //board 초기화
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++) board[i][j] = 0;
    }
    let x = sharkX;
    let y = sharkY;
    let idx = 0;
    for(let i=1; i<n; i+=2){
        //왼쪽, 아래 홀수번씩 이동
        for(let j=0; j<i; j++){
            x += dx[2];
            y += dy[2];
            board[x][y] = group[idx];
            idx+=1;
            if(idx >= group.length) return;
        }
        for(let j=0; j<i; j++){
            x += dx[1];
            y += dy[1];
            board[x][y] = group[idx];
            idx+=1;
            if(idx >= group.length) return;
        }
        //오른쪽, 위 짝수번씩 이동
        for(let j=0; j<=i; j++){
            x += dx[3];
            y += dy[3];
            board[x][y] = group[idx];
            idx+=1;
            if(idx >= group.length) return;
        }
        for(let j=0; j<=i; j++){
            x += dx[0];
            y += dy[0];
            board[x][y] = group[idx];
            idx+=1;
            if(idx >= group.length) return;
        }
    }
    //마지막 왼쪽 이동 n-1번
    for(let j=0; j<n-1; j++){
        x += dx[2];
        y += dy[2];
        board[x][y] = group[idx];
        idx+=1;
        if(idx >= group.length) return;
    }
 
}
function grouping(){
    let x = sharkX;
    let y = sharkY;
    const group = [];
    let value = 0;
    let count = 0;
    for(let i=1; i<n; i+=2){
        //왼쪽, 아래 홀수번씩 이동
        for(let j=0; j<i; j++){
            x += dx[2];
            y += dy[2];
            check_group(x, y);
        }
        for(let j=0; j<i; j++){
            x += dx[1];
            y += dy[1];
            check_group(x, y);
        }
        //오른쪽, 위 짝수번씩 이동
        for(let j=0; j<=i; j++){
            x += dx[3];
            y += dy[3];
            check_group(x, y);
        }
        for(let j=0; j<=i; j++){
            x += dx[0];
            y += dy[0];
            check_group(x, y);
        }
    }
    //마지막 왼쪽 이동 n-1번
    for(let j=0; j<n-1; j++){
        x += dx[2];
        y += dy[2];
        check_group(x, y);
    }

    function check_group(x, y){
        if(board[x][y]===0){
            return;
        }
        if(board[x][y]===value) count +=1;
        else{
            if(value!==0) group.push(count, value);
            value = board[x][y];
            count = 1;
        }
    }
    group.push(count, value);
    return group;

}
function move(){
    let end = false;
    while(!end){
        end = true;
        let x = sharkX + 1;
        let y = sharkY - 1;
        for(let i=2; i<n; i++){
            if(i%2===0){
                //오른쪽, 위 짝수번씩 이동
                for(let j=0; j<i; j++){
                    if(board[x][y] === 0) move_ball(x, y, 3);
                    x += dx[3];
                    y += dy[3];
                }
                for(let j=0; j<i; j++){
                    if(board[x][y] === 0) move_ball(x, y, 0);
                    x += dx[0];
                    y += dy[0];
                }
            }
            else{
                  //왼쪽, 아래 홀수번씩 이동
                for(let j=0; j<i; j++){
                    if(board[x][y] === 0) move_ball(x, y, 2);
                    x += dx[2];
                    y += dy[2];
                }
                for(let j=0; j<i; j++){
                    if(board[x][y] === 0) move_ball(x, y, 1);
                    x += dx[1];
                    y += dy[1];
                }
            }
        }
        //마지막 왼쪽 이동 n-1번
        for(let j=0; j<n-2; j++){
            if(board[x][y] === 0) move_ball(x, y, 2);
            x += dx[2];
            y += dy[2];
        }

    }
   
    function move_ball(x, y, d){
        let nx = x + dx[d];
        let ny = y + dy[d];
        if(board[x][y] === 0 && board[nx][ny] === 0) return;
        end = false;
        board[x][y] = board[nx][ny];
        board[nx][ny] = 0;
    }
};



//회전 이동 함수
function search(){
    let x = sharkX;
    let y = sharkY;
    for(let i=1; i<n; i+=2){
        //왼쪽, 아래 홀수번씩 이동
        for(let j=0; j<i; j++){
            x += dx[2];
            y += dy[2];
        }
        for(let j=0; j<i; j++){
            x += dx[1];
            y += dy[1];
        }
        //오른쪽, 위 짝수번씩 이동
        for(let j=0; j<=i; j++){
            x += dx[3];
            y += dy[3];
        }
        for(let j=0; j<=i; j++){
            x += dx[0];
            y += dy[0];
        }
    }
    //마지막 왼쪽 이동 n-1번
    for(let j=0; j<n-1; j++){
        x += dx[2];
        y += dy[2];
    }
 
}

//solve
//끔찍한 구현 다시는 만나고 싶지 않아...