const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const [nh, nm, ns] = input[0].split(":").map(Number);
const [th, tm, ts] = input[1].split(":").map(Number);

let ntime = nh * 60 * 60 + nm * 60 + ns;
let time = th * 60 * 60 + tm * 60 + ts;
if (ntime >= time) time += 24 * 60 * 60;
const diff = Math.abs(ntime - time);
let h = parseInt(diff / 3600);
let m = parseInt((diff - h * 3600) / 60);
let s = diff % 60;
console.log(
  h.toString().padStart(2, "0") +
    ":" +
    m.toString().padStart(2, "0") +
    ":" +
    s.toString().padStart(2, "0")
);

//solve
//반례 : 두 시간이 같을때 최소한 1초를 기다리므로 다음날이 되어야함
