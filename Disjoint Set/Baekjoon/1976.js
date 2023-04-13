const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[0]);

const parents = new Array(n);
for(let i=0; i<n; i++) parents[i] = i;

const board = [];
for(let i=2; i<=n+1; i++){
    board.push(input[i].split(" ").map(Number));
}

for(let i=0; i<n; i++){
    for(let j=0; j<n; j++){
        if(board[i][j]===1) union(parents, i, j);
    }
}

const plans = new Set(input[n+2].split(" ").map(Number));
let set = null;
for(let i of plans){
    let parent = find(parents, i - 1); // ✅ 집합이 0부터 시작하므로 -1 해주기
    if(set === null) set = parent; // ✅ 집합이 0부터 시작하므로 falsy로 체크하면 안됨 ㅜ
    else{
        if(set !== parent){
            console.log('NO');
            return;
        }
    }
}
console.log('YES');


function union(parent, a, b){
    a = find(parent, a);
    b = find(parent, b);
    if(a<b) parent[b] = a;
    else parent[a] = b;
}
function find(parent, a){
    if(parent[a]!==a) parent[a] = find(parent, parent[a]);
    return parent[a]
}

//solve
