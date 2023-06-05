// 2023-06-05
// 반복문 문제
// 단순 console.log 출력이 아니라
// 출력량이 많을때 빠른 출력을 위한 문제 (문제에서는 출력 최대 100만 라인)

const input = require('fs').readFileSync('./input.txt').toString().split('\n')
const n = input[0]

let answer = ''
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(" ").map(Number)
    answer += a + b + '\n'
}

console.log(answer)