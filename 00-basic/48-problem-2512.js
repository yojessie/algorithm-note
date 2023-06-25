// 2023-06-25
// 이진탐색 문제 - 예산

const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const city = input[0].split(" ").map(Number)
const budget = Number(input[1])

let start = 1
let end = Math.max(...city)
let nowMax = 0
while (start <= end) {
    let mid = parseInt((start + end) / 2)
    let total = 0
    for (let i of city) {
        total += Math.min(mid, i)
    }
    if (total <= budget) {
        nowMax = mid
        start = mid + 1
    } else {
        end = mid - 1
    }
}
console.log(nowMax)