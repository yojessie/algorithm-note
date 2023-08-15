// 2023-06-10
// 정렬 문제

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [num, n] = input[0].split(" ").map(Number);
const numArr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(numArr[n - 1]);
