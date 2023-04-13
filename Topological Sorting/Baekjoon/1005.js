const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const t = parseInt(input[0]);
let idx = 0;
const answer = [];
for(let test = 0; test < t; test++){
    const [n, k] = input[++idx].split(" ").map(Number);
    const d = input[++idx].split(' ').map(Number);
    const indegree = new Array(n+1).fill(0);
    const graph = new Array(n+1);
    for(let i=0; i<=n; i++) graph[i] = [];

    for(let i=0; i<k; i++){
        idx+=1;
        const [x, y] = input[idx].split(" ").map(Number);
        indegree[y] += 1;
        graph[x].push(y);
    }
    const w = parseInt(input[++idx]);
    answer.push(topology_sort(indegree, graph, d, w));

}
console.log(answer.join('\n'));

function topology_sort(indegree, graph, d, w){
    const queue = [];
    const dp = new Array(indegree.length).fill(0);
    for(let i=1; i<=indegree.length - 1; i++){
        if(indegree[i] === 0){
            queue.push(i);
            dp[i] = Math.max(dp[i], d[i-1]);
        }
    }

    while(queue.length > 0){
        const v = queue.shift();
        for(let i of graph[v]){
            indegree[i] -= 1;
            dp[i] = Math.max(dp[i], dp[v] + d[i-1]); // ✅ 요부분을 indegree가 0일때만 수행하는게 아니라 도달할때마다 업데이트 해줘야함... DP + 위상정렬!
            if(indegree[i] === 0){
                queue.push(i);
            }
        }
    }
    return dp[w];
}

//DP + 위상정렬 문제
