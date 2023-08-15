// 2023-06-13
// 그리디 알고리즘 A to B 문제

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

let [a, b] = input.map(Number);
let count = 1;

while (b > a) {
  if (b % 10 === 1) {
    b = Math.floor(b / 10);
    count++;
  } else if (b % 2 === 0) {
    b /= 2;
    count++;
  } else {
    break;
  }
}

console.log(a === b ? count : -1);
