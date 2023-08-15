// 2023-06-05
// 조건문 문제

const input = require("fs").readFileSync("./input.txt").toString().split(" ");

let h = parseInt(input[0]);
let m = parseInt(input[1]);

m -= 45;
if (m < 0) {
  m += 60;
  h--;
  if (h < 0) h += 24;
}

console.log(`${h} ${m}`);
