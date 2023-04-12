const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const graph = [];
for(let i=0; i<=n; i++) graph.push([]);

for(let i=1; i<=m; i++){
    const [a, b] = input[i].split(' ').map(Number);
    graph[b].push(a);
}
let max = 0;
let answer = [];

for(let i=1; i<=n; i++){
    dfs(i);
}
console.log(answer.join(" "));

function dfs(v){
    const visited = new Array(n+1).fill(false);
    let count = 0;
    const stack = [v];
    while(stack.length > 0){
        let n = stack.pop();
        visited[n] = true;
        count+=1;
        for(let i of graph[n]){
            if(!visited[i]){
                stack.push(i);
            }
        }
    }
    if(count > max){
        max = count;
        answer = [v];
    }
    else if(count === max){
        answer.push(v);
    }
}

//not solve
//nodejs로 도저히 시간초과를 어떻게 해결하는지 모르겠다... 그래서 파이썬으로 제출함
//최적화 하는 방법이 있는줄 알았는데 그냥 dfs/bfs 완전탐색 하면 된다는데 시간초과 ㅜㅜ