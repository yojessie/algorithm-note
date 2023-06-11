// 2023-06-11
// 그리디 문제

const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[0].split(" ").map(Number).sort((a, b) => a - b)

let sum = 0
let answer = 0
for (let i of arr) {
    sum += i
    answer += sum
}
console.log(answer)