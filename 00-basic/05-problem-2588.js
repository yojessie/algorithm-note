// 2023-06-04
// 입출력 문제

let input = require('fs').readFileSync('./input.txt').toString().split('\n')

const a = Number(input[0])
const b = input[1]

console.log(a * Number(b.at(-1)))
console.log(a * Number(b.at(-2)))
console.log(a * Number(b.at(-3)))
console.log(a * Number(b))

// input
// 472
// 385