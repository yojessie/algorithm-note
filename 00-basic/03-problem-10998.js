// 2023-06-04
// 입출력 문제

let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')
let data = input[0].split(' ')

const a = data[0]
const b = data[1]

console.log(Number(a) * Number(b))
