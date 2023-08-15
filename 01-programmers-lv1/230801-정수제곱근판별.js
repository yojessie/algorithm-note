// 연습문제 - 정수 제곱근 판별
// https://school.programmers.co.kr/learn/courses/30/lessons/12934

// 2023-08-01
function solution(n) {
  const root = Math.sqrt(n);
  return Number.isInteger(root) ? (root + 1) ** 2 : -1;
}
solution();
// 제곱근을 구하고 제곱근이 정수이면
// 제곱근 + 1의 제곱 반환, 제곱근이 정수가 아니면 -1 반환
