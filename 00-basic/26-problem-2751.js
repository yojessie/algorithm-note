// 2023-06-10
// 배열 문제

const input = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
let arr = []
for (let i = 1; i < input.length; i++) {
    arr.push(Number(input[i]))
}
arr.sort((a, b) => a - b)
let answer = ''
for (let i of arr) {
    answer += `${i}\n`
}
console.log(answer)