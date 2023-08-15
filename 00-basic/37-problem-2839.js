// 2023-06-12
// 그리디 - 설탕배달

// 실패코드
// const input = require("fs").readFileSync("/dev/stdin").toString().trim();
// let k = Number(input)

// function calc(n, m) {
//     let left = k
//     let count = 0
//     if (left >= n){
//         count += Math.floor(left / n)
//         left = left % n
//     }
//     if (left >= m) {
//         count += Math.floor(left / m)
//         left = left % m
//     }
//     return left > 0 ? -1 : count
// }

// const a = calc(5, 3)
// const b = calc(3, 5)

// let answer = 0

// if (a > 0 && b > 0) answer = Math.min(a, b)
// if (a < 0 || b < 0) answer = Math.max(a, b)
// if (a < 0 && b < 0) answer = -1

// console.log(answer)

// 강의 힌트 듣고 겨우 풀었다 ㅠㅠ
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let k = Number(input);
let answer = 0;

while (k > 0) {
  if (k % 5 === 0) {
    k -= 5;
    answer++;
  } else {
    k -= 3;
    answer++;
  }
}

console.log(k !== 0 ? -1 : answer);
