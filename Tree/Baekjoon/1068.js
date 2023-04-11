const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);

const tree = [];
for(let i=0; i<n; i++) tree[i] = [];

const parents = input[1].split(' ').map(Number);
let root = null;
parents.forEach((p, idx)=>{
    if(p<0) root = idx;
    else tree[p].push(idx);
})
const deleteNode = parseInt(input[2]);

let count = 0;
solve(root, deleteNode);

console.log(count);

function solve(root, deleteNode){
    if(root === deleteNode) return 0; //root를 삭제하는 경우
    if(tree[root].length === 0 || (tree[root].length === 1 && tree[root][0] === deleteNode)){
        count += 1;
        return;
    }
    for(let child of tree[root]){
        if(child===deleteNode) continue;
        solve(child, deleteNode);
    }
}

//solve

//ref : https://www.acmicpc.net/source/37170812
//걍 처음에 트리 생성할때부터 deleteNode가 자식인 경우는 안넣으면 되자나?!

const tree2 = [];
for(let i=0; i<n; i++) tree2[i] = [];

const parents2 = input[1].split(' ').map(Number);
let root2 = null;
parents2.forEach((p, idx)=>{
    if(p<0) root2 = idx;
    else{
        if(idx !== deleteNode) tree2[p].push(idx);
    }
})

let answer = 0;
solve2(root2, deleteNode);
console.log(answer);
function solve2(root2, deleteNode){
    if(root2 === deleteNode) return 0; //root를 삭제하는 경우
    if(tree2[root2].length === 0) answer += 1;
    for(let child of tree2[root2]){
        solve2(child, deleteNode);
    }
}