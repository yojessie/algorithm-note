// 2023-06-07
// 문자열 문제

const input = require('fs').readFileSync('./input.txt').toString().split('\n')
const nums = input[1].split("").map(Number)

let sum = 0
for (let i of nums) {
    sum += i
}
console.log(sum)