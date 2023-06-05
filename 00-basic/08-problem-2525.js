// 2023-06-05
// 조건문 문제 but 반복문으로 풀었네..

let input = require('fs').readFileSync('./input.txt').toString().split("\n")
let [h, m] = input[0].split(" ").map(Number)
let time = Number(input[1])

m += time

while (m > 59) {
    h++
    m -= 60
    while (h > 23) {
        h -= 24
    }
}

console.log(h + " " + m)