// 2023-06-10
// 정렬 문제

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];
for (const i of input) {
  arr.push(i.split(" ").map(Number));
}
arr.sort((a, b) => a[1] - b[1]);
arr.sort((a, b) => a[0] - b[0]);

let answer = "";
for (let i of arr) {
  i = i.join(" ");
  answer += `${i}\n`;
}
console.log(answer);
