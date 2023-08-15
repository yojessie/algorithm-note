// 2023-06-06
// 배열 문제

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const arr = input.map(Number);

const check = new Set();

for (let i = 0; i < 10; i++) {
  check.add(arr[i] % 42);
}

console.log(check.size);
