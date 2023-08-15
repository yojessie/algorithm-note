// 2023-06-11
// 그리디 문제

const [n, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [num, k] = n.split(" ").map(Number);
const arr = input.map(Number).sort((a, b) => b - a);

let money = k;
let count = 0;
for (const i of arr) {
  if (i > money) {
    count += 0;
  } else {
    const divide = Math.floor(money / i);
    money -= i * divide;
    count += divide;
  }
}
console.log(count);
