// 2023-06-06
// 배열 문제

const input = require('fs').readFileSync('./input.txt').toString().split('\n')

const arr = input.map(Number)
let maxNum = Math.max(...arr)

console.log(maxNum)
console.log(arr.indexOf(maxNum) + 1)