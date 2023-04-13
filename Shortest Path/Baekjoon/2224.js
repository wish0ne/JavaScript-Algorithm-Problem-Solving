const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const graph = new Array(52);
for(let i=0; i<52; i++) graph[i] = [];
const distance = new Array(52);
for(let i=0; i<52; i++) distance[i] = new Array(52).fill(0);

for(let i=1; i<=n; i++){
    const [a, b] = input[i].split(' => ');
    graph[strToCode(a)].push(strToCode(b));
    distance[strToCode(a)][strToCode(b)] = 1;
}

for(let i=0; i<52; i++){
    distance[i][i] = 0;
}

for(let k=0; k<52; k++){
    for(let i=0; i<52; i++){
        for(let j=0; j<52; j++){
            if(i===j || j===k || k===i) continue; //✅ 오답 원인
            distance[i][j] = distance[i][j] || (distance[i][k] && distance[k][j]);
        }
    }
}

const answer = [];
for(let i=0; i<52; i++){
    for(let j=0; j<52; j++){
        if(distance[i][j]===1) answer.push(`${codeToStr(i)} => ${codeToStr(j)}`);
    }
}
console.log(answer.length);
console.log(answer.join('\n'));

function strToCode(s){
    //소문자
    if(/[a-z]/.test(s)) return s.charCodeAt(0) - 'a'.charCodeAt(0) + 26;
    //대문자
    else return s.charCodeAt(0) - 'A'.charCodeAt(0);
}

function codeToStr(c){
    if(c<26) return String.fromCharCode(c + 'A'.charCodeAt(0));
    return String.fromCharCode(c + 'a'.charCodeAt(0) - 26);
}

//반례를 잘 찾아보려고 하자...