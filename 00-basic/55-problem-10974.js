// 2023-07-28
// 백트래킹 문제 - 모든 순열
// https://www.acmicpc.net/problem/10974

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const n = Number(input)

let arr = []
for (let i = 1; i <= n; i++) arr.push(i)

let visited = new Array().fill(false)
let selected = []

let answer = ''
function dfs(arr, depth) {
    if (depth == n) {
        for (let i of selected) answer += i + ' '
        answer += '\n'
        return
    }
    for (let i of arr) {
        if (visited[i]) continue
        selected.push(i)
        visited[i] = true
        dfs(arr, depth + 1)
        selected.pop()
        visited[i] = false
    }
}
dfs(arr, 0)
console.log(answer)


// 앞서 풀었던 로직을 상기하며 쉽게 풀 수 있었다.