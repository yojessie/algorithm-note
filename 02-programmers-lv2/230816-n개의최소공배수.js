// 연습문제 - N개의 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12953

// 2023-08-16
function solution(arr) {
  let base = Math.max(...arr);
  for (let i = 2; i < base; i++) {
    for (const n of arr) {
      if (base % n !== 0) {
        base = Math.max(...arr) * i;
        break;
      }
    }
  }
  return base;
}
solution();
