// 2023-06-25
// 이진탐색 - 나무자르기

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const need = n.split(" ").map(Number)[1];
const tree = input[0].split(" ").map(Number);

let start = 1;
let end = Math.max(...tree);
let result = 0;
while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let total = 0;
  for (const i of tree) {
    if (i > mid) total += i - mid;
  }
  if (total >= need) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(result);
