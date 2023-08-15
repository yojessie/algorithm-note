// 2023-06-10
// 정렬 문제

const input = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(Number(input[i]));
}
arr.sort((a, b) => a - b);

let answer = "";
for (const i of arr) {
  answer += `${i}\n`;
}
console.log(answer);
