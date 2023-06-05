// 2023-06-05
// 반복문 문제

const input = require('fs').readFileSync('./input.txt').toString()
const n = Number(input)
let sum = 0

for (let i = 1; i <= n; i++) {
    sum += i
}

console.log(sum)

// 등차수열의 합 공식 이용하기
// console.log((n * (n + 1)) / 2)