// 2023-06-11
// 정렬 문제

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const arr = [];
for (let i = 1; i < input.length; i++) {
  arr.push(input[i].split(" "));
  arr[i - 1][0] = Number(arr[i - 1][0]);
}
arr.sort((a, b) => a[0] - b[0]);

let answer = "";
for (const i of arr) {
  answer += `${i.join(" ")}\n`;
}
console.log(answer);
