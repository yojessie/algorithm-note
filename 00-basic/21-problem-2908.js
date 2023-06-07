// 2023-06-07
// 문자열 문제

const input = require('fs').readFileSync('./input.txt').toString().split(' ')
const a = Number(input[0].split('').reverse().join(''))
const b = Number(input[1].split('').reverse().join(''))

console.log(a > b ? a : b)