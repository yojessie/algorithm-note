// 연습문제 - 귤 고르기
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

// 2023-08-29
function solution(k, tangerine) {
  const count = new Array(Math.max(...tangerine) + 1).fill(0);
  for (const i of tangerine) count[i] += 1;
  count.sort((a, b) => b - a);

  let sum = 0;
  let size = 0;
  for (const i of count) {
    sum += i;
    size += 1;
    if (sum >= k) return size;
  }
}
solution(6, [1, 3, 2, 5, 4, 5, 2, 3]);
