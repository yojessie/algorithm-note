// 2023-06-11
// 정렬 문제

// 시간초과 코드
// const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// const arr = input[0].split(" ").map(Number)
// const mySet = [...new Set(arr)]

// let answer = []
// for (let i of arr) {
//     let count = 0
//     for (let j of mySet) {
//         if (i > j) count++
//     }
//     answer.push(count)
// }

// console.log(answer.join(" "))


// 성공 코드
const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const arr = input[0].split(" ").map(Number)
const mySet = [...new Set(arr)].sort((a, b) => a - b)

let maping = {}
for (let i = 0; i < mySet.length; i++) {
    maping[mySet[i]] = i
}

let answer = ''
for (let i of arr) {
    answer += `${maping[i]} `
}
console.log(answer)