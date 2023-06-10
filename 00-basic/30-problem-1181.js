// 2023-06-10
// 정렬 문제

const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const mySet = new Set(arr.sort().sort((a, b) => a.length - b.length))
const newArr = [...mySet]
let answer = ''
newArr.map((x) => answer += `${x}\n`)
console.log(answer)