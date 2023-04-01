const fs = require("fs");
const file = "./input.txt";
// const file = '/dev/stdin';
const input = fs.readFileSync(file).toString().trim().split("\n");

const n = parseInt(input[0]);
const tree = {};
for (let i = 1; i <= n; i++) {
  const [root, left, right] = input[i].split(" ");
  tree[root] = [left, right];
}

const preOrder = (root) => {
  const [left, right] = tree[root];
  answer.push(root);
  if (left !== ".") preOrder(left);
  if (right !== ".") preOrder(right);
};

const inOrder = (root) => {
  const [left, right] = tree[root];
  if (left !== ".") inOrder(left);
  answer.push(root);
  if (right !== ".") inOrder(right);
};

const postOrder = (root) => {
  const [left, right] = tree[root];
  if (left !== ".") postOrder(left);
  if (right !== ".") postOrder(right);
  answer.push(root);
};

let answer = [];
preOrder("A");
console.log(answer.join(""));
answer = [];
inOrder("A");
console.log(answer.join(""));
answer = [];
postOrder("A");
console.log(answer.join(""));

//solve

//ref1 : return을 사용하여 더 깔끔한 풀이
const preOrder2 = (root) => {
  if (root === ".") return "";
  return root + preOrder2(tree[root][0]) + preOrder2(tree[root][1]);
};

const inOrder2 = (root) => {
  if (root === ".") return "";
  return inOrder2(tree[root][0]) + root + inOrder2(tree[root][1]);
};

const postOrder2 = (root) => {
  if (root === ".") return "";
  return postOrder2(tree[root][0]) + postOrder2(tree[root][1]) + root;
};

console.log(preOrder2("A"));
console.log(inOrder2("A"));
console.log(postOrder2("A"));
