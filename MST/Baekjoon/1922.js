const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const m = parseInt(input[1]);
const edges = [];
for(let i=2; i<m+2; i++){
    const [a, b, c] = input[i].split(" ").map(Number);
    edges.push([c, a, b]); //비용, a, b
}
edges.sort((a,b)=>a[0] - b[0]);

const parents = new Array(n+1);
for(let i=0; i<=n; i++) parents[i] = i;

let answer = 0;
for(let edge of edges){
    const [cost, x, y] = edge;
    if(find(parents, x) !== find(parents, y)){
        union(parents, x, y);
        answer += cost;
    }
}

console.log(answer);

function find(parent, x){
    if(parent[x] !== x) parent[x] = find(parent, parent[x]);
    return parent[x];
}

function union(parent, x, y){
    x = find(parent, x);
    y = find(parent, y);
    if(x < y) parent[y] = x;
    else parent[x] = y;
}

//solve
