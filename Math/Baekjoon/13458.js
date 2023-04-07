const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const rooms = input[1].split(' ').map(Number);
const [b, c] = input[2].split(" ").map(Number);

let count = 0;
rooms.forEach((room)=>{
    room -= b;
    count+=1;
    if(room>0) count += Math.ceil(room/c)
})


console.log(count);