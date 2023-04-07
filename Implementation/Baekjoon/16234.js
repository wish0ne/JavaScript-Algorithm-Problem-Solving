const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, l, r] = input[0].split(" ").map(Number);
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

const world = new Array(n);
for(let i=1; i<=n; i++) world[i-1] = input[i].split(" ").map(Number);

function find_parent(x, parent){
    if(x !== parent[x]) parent[x] = find_parent(parent[x], parent);
    return parent[x];
}

function union(x, y, parent){
    x = find_parent(x, parent);
    y = find_parent(y, parent);
    if(x<y) parent[y] = x;
    else parent[x] = y;
}

let count = 0;
let flag = true;
while(flag){

    const parent = new Array(n*n);
    for(let i=0; i<n*n; i++) parent[i] = i;

    const visited = new Array(n);
    for(let i=0; i<n; i++) visited[i] = new Array(n).fill(false);
    
    //국경선 열기
    for(let i=0; i<n; i++){
        for(let j=0; j<n;  j++){
            dfs(i, j, parent, visited);
        }
    }
    //연합 체크
    const total_sum = new Array(n*n).fill(0);
    const total_count = new Array(n*n).fill(0);
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let idx = parent[i*n + j]
            total_sum[idx] += world[i][j];
            total_count[idx] += 1;
        }
    }
    //인구이동
    flag = false;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            let idx = parent[i*n + j]
            let people = parseInt(total_sum[idx] / total_count[idx]);
            if(people !== world[i][j]){
                world[i][j] =  people
                flag = true;
            }
    
        }
    }
    if(!flag) break;
    count+=1;

}
console.log(count);


function dfs(x, y, parent, visited){
    visited[x][y] = true;
    for(let i=0; i<4; i++){
        let nx = x + dx[i];
        let ny = y + dy[i];
        if(nx<0 || nx>=n || ny<0 || ny>=n) continue;
        if(visited[nx][ny]) continue;
        const diff = Math.abs(world[nx][ny] - world[x][y]);
        if(diff>=l && diff<=r){
            union(x*n+y, nx*n+ny, parent);
            dfs(nx, ny, parent, visited);
        }
    }
}
