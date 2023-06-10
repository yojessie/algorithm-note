// 2023-06-06
// 배열 문제

const input = require('fs').readFileSync('./input.txt').toString().split('\n')
const arr = input.map(x => x.split(" "))

let answer = ''

for (let i = 1; i < arr.length; i++) {
    let thisArr = arr[i].map(Number)
    let num = thisArr[0]
    let sum = thisArr.reduce((acc, cur) => acc + cur) - num
    let avg = sum / num
    
    let count = 0
    for (let j = 1; j <= num; j++) {
        if (thisArr[j] > avg) count++
    }
    
    let percent = count / num * 100
    answer += `${percent.toFixed(3)}%\n`
}
console.log(answer)