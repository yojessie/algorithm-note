// 2023-06-04
// 입출력 문제

const fs = require("fs");

const input = fs.readFileSync("dev/stdin").toString().split("\n");
const data = input[0].split(" ");

const a = data[0];
const b = data[1];

console.log(Number(a) * Number(b));
