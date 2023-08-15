// 2023-06-10
// 정렬 문제

const input = require("fs").readFileSync("./input.txt").toString().split(" ");

const arr = input.map(Number).sort((a, b) => a - b);
let answer = "";
for (const i of arr) {
  answer += `${i} `;
}
console.log(answer);
