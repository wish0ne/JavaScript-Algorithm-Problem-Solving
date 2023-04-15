const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const s = [];
for(let i=1; i<=n; i++) s.push(input[i].split(' ').map(Number));

//스타트팀 선택 -> 나머지 링크 팀
// n/2명 선택하는 모든 경우의 수 고려
let answer = Number.MAX_SAFE_INTEGER;
const start = [];
const link = [];
solve(0);
function solve(i){
    if(i>n) return;
    if(start.length===n/2 && link.length===n/2){
        //능력치 계산
        let temp = calc(start, link);
        answer = Math.min(temp, answer);
        return;
    }
    //i번째 사람을 스타트 팀으로 선택
    start.push(i);
    solve(i+1);
    start.pop();
    //i번째 사람을 링크 팀으로 선택
    link.push(i);
    solve(i+1);
    link.pop();
}
console.log(answer);

function calc(start, link){
    let start_sum = 0;
    let link_sum = 0;
    for(let i=0; i<n/2; i++){
        for(let j=i+1; j<n/2; j++){
            start_sum += s[start[i]][start[j]] + s[start[j]][start[i]]; 
            link_sum += s[link[i]][link[j]] + s[link[j]][link[i]];
        }
    }
    return Math.abs(start_sum - link_sum);

}

//solve
