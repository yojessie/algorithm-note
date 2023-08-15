// 연습문제 - 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// 2023-08-01
function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
solution(3, 5);
// 전에는 max와 min을 활용해볼 생각을 못했구나..
