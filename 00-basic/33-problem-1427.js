// 2023-06-11
// 정렬 문제

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const arr = input.split("").map(Number).sort((a, b) => b - a)
console.log(arr.join(""))