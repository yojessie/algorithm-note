// 2023-06-05
// 조건문 문제

const input = require("fs").readFileSync("./input.txt").toString().split(" ");

const [a, b, c] = input.map(Number);
let result = 0;

if (a === b && b === c) result = 10000 + a * 1000;
else if (a === b || a === c) result = 1000 + a * 100;
else if (b === c) result = 1000 + b * 100;
else result = Math.max(a, b, c) * 100;

console.log(result);
