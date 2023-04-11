const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

//트리 생성
class Node{
    constructor(value){
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }
}

let root = null;
for(let i=0; i<input.length; i++){
    const value = parseInt(input[i]);
    const node = new Node(value);
    if(!root){
        root = node;
        continue;
    }
    let now = root;
    while(now){
        if(now.value < node.value){
            if(!now.right){
                now.right = node;
                node.parent = now;
                break;
            }
            now = now.right;
        }
        else{
            if(!now.left){
                now.left = node;
                node.parent = now;
                break;
            }
            now = now.left;
        }
    }
}

//후위 순회
const answer = [];
function traversal(root){
    if(!root) return;
    traversal(root.left);
    traversal(root.right);
    answer.push(root.value);
}

traversal(root);
console.log(answer.join('\n'))

//solve
//시간초과날까바 O(n)으로 트리생성하려고 고민했는데 실패! 걍 노드 넣을때마다 root에서 출발해도 노드수가 적어서 괜춘
//이진트리의 높이는 lg(n)

//ref : https://gywlsp.github.io/boj/5639/
//이진트리 생성 안하고도 풀수있음! 재귀 이용해서 root보다 작은값들 / 큰값들로 구분하면 됨

console.log('---------')
const nodes = input.map(Number);

const answer2 = [];
function solve(tree){
    if(tree.length <= 0){
        return;
    }
    //left subtree
    let index = tree.findIndex((node)=>node>tree[0]);
    //left만 존재
    if(index<0){
        solve(tree.slice(1))
    }
    else{
        solve(tree.slice(1, index));
        //right subtree
        solve(tree.slice(index));
    }
    answer2.push(tree[0])
}
solve(nodes);
console.log(answer2.join('\n'))