// 2023-06-04
// 입출력 문제

const fs = require("fs");

const data = fs.readFileSync("dev/stdin").toString().split("\n");
const input = data[0].split(" ");

const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b)); // 정수형으로 변환
console.log(a % b);
