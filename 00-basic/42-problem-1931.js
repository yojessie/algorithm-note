// 2023-06-14
// 그리디 문제 - 회의실 배정

// 잘 안풀려서 결국 강의 예제를 보고 고민해서 수정한 코드
const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split('\n');
const arr = input.map((x) => x.split(" ").map(Number))

arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0]
    return a[1] - b[1]
})

let endTime = arr[0][1]
let count = 1
for (let i = 1; i < n; i++) {
    if (arr[i][0] >= endTime) {
        endTime = arr[i][1]
        count++
    }
}
console.log(count)