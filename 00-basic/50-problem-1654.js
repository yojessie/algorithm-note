// 2023-06-25
// 이진탐색 - 랜선 자르기

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const need = n.split(" ").map(Number)[1];
const lines = input.map(Number);

let start = 1;
let end = Math.max(...lines);
let result = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let count = 0;
  for (const i of lines) {
    count += parseInt(i / mid);
  }
  if (count >= need) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
