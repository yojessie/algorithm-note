// 2023-06-05
// 반복문 문제

const input = require("fs").readFileSync("./input.txt").toString();

const n = Number(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${n} * ${i} = ${n * i}`);
}
