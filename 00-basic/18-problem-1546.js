// 2023-06-07
// 배열 문제

const input = require('fs').readFileSync('./input.txt').toString().split('\n')

const num = Number(input[0])
const scoreArr = input[1].split(' ').map(Number)
let newArr = []
for (let i = 0; i < num; i++) {
    let max = Math.max(...scoreArr)
    newArr.push(scoreArr[i] / max * 100)
}

const newAvg = newArr.reduce((acc, cur) => acc + cur) / num
console.log(newAvg)

