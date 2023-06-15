// 2023-06-15
// 그리디 알고리즘 - 풍선 맞추기

// 혼자힘으로 겨우 풀었지만 역시나 시간초과 ㅠㅠ
// const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// let arr = input.map(Number)

// let h = arr[0]
// let deleted = []
// let arrow = 1
// while (deleted.length < n) {
//     for (let i = 0; i < n; i++) {
//         if (arr[i] == h) {
//             deleted.push(arr[i])
//             arr[i] = 0
//             h--
//         } else if (h == 0) break
//     }
//     for (let j = 0; j < n; j++) {
//         if (arr[j] != 0) {
//             h = arr[j]
//             arrow++
//             break
//         }
//     }
// }

// console.log(arrow)


// 열심히 코드 수정했으나 역시나 시간 초과
// 이런저런 반례 다 넣어봐도 통과는 하는데..
// while문 안에서 for문이 도니까 시간복잡도가 n²이 되어서 그런 것 같다.
// while을 활용하지 않고 풍선 배열을 다시 돌면서 높이를 확인할 수 없을 것 같아서
// 결국 강의 코드를 보면서 공부하기로
// const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// let arr = input.map(Number)

// let deleted = []
// let arrow = 0
// while (deleted.length < n) {
//     let h = Math.max(...arr)
//     arrow++
//     for (let i = 0; i < n; i++) {
//         if (arr[i] == h) {
//             deleted.push(arr[i])
//             arr[i] = -1
//             h--
//         }
//     }
// }

// console.log(arrow)

// 강의의 아이디어는 각 풍선 높이 인덱스의 arrow배열을 두고
// 풍선arr의 값을 arrow배열의 인덱스로 활용한다
// 겨우 이해했는데 시간이 지나서 다시 풀어봐야할 것 같다.
const [n, ...input] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);

let arr = input.map(Number)
let result = 0
let arrow = Array.from(arr).fill(0)

for (let i of arr) {
    if (arrow[i] > 0) {
        arrow[i]--
        arrow[i - 1]++
    } else {
        arrow[i - 1]++
        result++
    }
}
console.log(result)