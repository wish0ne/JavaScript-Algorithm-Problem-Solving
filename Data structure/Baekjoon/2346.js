const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
let balls = input[1].split(" ").map(Number);
const answer = [];


class Node{
    constructor(value, index){
        this.prev = null;
        this.next = null;
        this.value = value;
        this.index = index;
    }
}

const list = [];
balls.forEach((ball, idx)=>{
    if(idx === 0){
        const head = new Node(ball, 1);
        list.push(head);
    }
    else if (idx === n-1){
        const tail = new Node(ball, n);
        tail.prev = list[list.length -1];
        list[list.length-1].next = tail;
        tail.next = list[0];
        list[0].prev = tail;
    }
    else{
        const node = new Node(ball, idx + 1);
        node.prev = list[list.length-1];
        list[list.length-1].next = node;
        list.push(node);
    }
})


let node = list[0];
while(answer.length < n){
    let next = node;
    answer.push(node.index);
    //시계
    if(node.value>0){
        next = node.next;
        //노드 삭제
        node.prev.next = node.next;
        node.next.prev = node.prev;
        for(let i=0; i<node.value - 1; i++){
            next = next.next;
        }

    }
    //반시계
    else{
        next = node.prev;
        //노드 삭제
        node.prev.next = node.next;
        node.next.prev = node.prev;
        for(let i=node.value; i<-1; i++){
            next = next.prev;
        }
    }
    node = next;
}
console.log(answer.join(' '))

//아나 똑같은 코든데 파이썬은 되고 nodejs는 메모리초과나고~

//연결리스트 말고 배열에서 인덱스 계산하는 풀이를 생각했어야함 (근데 이것도 메모리초과나네 ㅋㅋ)
//음수 인덱스 변환하는거 기억하기
//https://ko.javascript.info/task/array-negative
//ref : https://www.acmicpc.net/source/23464328

const arr = input[1].split(" ").map((value, idx)=>[parseInt(value), idx+1]);
let result = ''

let index = 0;
let [k, idx] = arr.shift();
result+=idx+' '

while(arr.length > 0){
    if(k<0){
        index = (index + k) % arr.length;
        if(index<0) index = arr.length + index; //✅ array[-N]는 array[array.length - N]와 동일
    }
    else{
        index = (index + (k-1)) % arr.length;
    }
    [k, idx] = arr.splice(index, 1)[0];
    result+=idx+' ';
}
console.log(result.trim())