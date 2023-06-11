// 2023-06-11
// 그리디 문제

const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const arr = input.split("-").map(x => x.split("+"))

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].map(Number).reduce((acc, cur) => acc + cur)
}

let answer = arr.reduce((acc, cur) => acc - cur)
console.log(answer)