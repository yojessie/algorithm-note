// 2023-06-06
// 배열 문제

const input = require("fs").readFileSync("./input.txt").toString().split("\n");

const arr = input[1].split(" ").map(Number);

// arr.sort((a, b) => a - b)
// console.log(`${arr[0]} ${arr[arr.length - 1]}`)

console.log(`${Math.min(...arr)} ${Math.max(...arr)}`);

// 둘다 결국 O(n)이긴함
