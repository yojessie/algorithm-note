// 2023-06-10
// 정렬 문제

const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let arr = []
for (let i of input) {
    arr.push(i.split(" ").map(Number))
}
function mySort(a, b) {
    if (a[1] === b[1]) return a[0] - b[0]
    return a[1] - b[1]
}
arr.sort(mySort)
let answer = ''
for (let i of arr) {
    i = i.join(" ")
    answer += `${i}\n`
}
console.log(answer)