const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [n, m] = input[0].split(' ').map(Number);

class Node{
    constructor(value = ""){
        this.value = value;
        this.isEnd = false;
        this.child = {};
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    add(string){
        let node = this.root;

        for(let i=0; i<string.length; i++){
            if(!node.child[string[i]]){
                node.child[string[i]] = new Node(node.value + string[i]);
            }
            node = node.child[string[i]];
        }
        node.isEnd = true;
    }

    search(string){
        let node = this.root;

        for(let i=0; i<string.length; i++){
            if(!node.child[string[i]]) return false;
            node = node.child[string[i]];
        }   
        if(node.isEnd) return node.value;
        return false;
    }
}

const trie = new Trie();
for(let i=1; i<=n; i++){
    trie.add(input[i]);
}
let answer = 0;
for(let i=n+1; i<=n+m; i++){
    if(trie.search(input[i])){
        answer+=1;
    }
}
console.log(answer);

//solve
//trie 자료구조 익숙해지기

//set 또는 이분탐색으로도 풀 수 있는 문제
//set 풀이
const set = new Set();
for(let i=1; i<=n; i++){
    set.add(input[i]);
}
let answer2 = 0;
for(let i=n+1; i<=n+m; i++){
    if(set.has(input[i])) answer2 += 1;
}
console.log(answer2);

