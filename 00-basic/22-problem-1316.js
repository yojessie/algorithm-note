// 2023-06-07
// 문자열 문제

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const num = Number(input[0]);
let count = num;

for (let i = 1; i <= num; i++) {
  const temp = [];
  let lastChar = "";
  for (const j of input[i]) {
    if (temp.includes(j) && lastChar !== j) {
      count--;
      break;
    }
    temp.push(j);
    lastChar = j;
  }
}
console.log(count);
