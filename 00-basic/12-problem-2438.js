// 2023-06-05
// 반복문 문제

const input = require('fs').readFileSync('./input.txt').toString()
const n = Number(input)

for (let i = 0; i < n; i++) {
    let temp = ''
    for (let j = 0; j <= i; j++) {
        temp += '*'
    }
    console.log(temp)
}
