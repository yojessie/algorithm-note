// 2023-06-04
// 입출력 문제

let fs = require('fs')
let data = fs.readFileSync('dev/stdin').toString().split('\n')
let input = data[0].split(' ')

const a = Number(input[0])
const b = Number(input[1])

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(parseInt(a / b)) // 정수형으로 변환
console.log(a % b)