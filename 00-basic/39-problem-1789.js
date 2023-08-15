// 2023-06-13
// 그리디 알고리즘 - 수들의 합

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = Number(input);
let sum = 0;
let count = 0;

// for (let i = 1; sum < n; i++) {
//     sum += i
//     count++
//     if (sum > n) {
//         sum -= i
//         let left = n - sum
//         sum += left
//         count--
//         break
//     }
// }
// console.log(count)

// 강의 정답 코드로 연습
while (sum <= n) {
  count++;
  sum += count;
}

console.log(--count);
