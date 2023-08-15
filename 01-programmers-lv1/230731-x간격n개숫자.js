// 연습문제 - x만큼 간격이 있는 n개의 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12954

// 2023-07-31 풀이
function solution(x, n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
}
solution(2, 5);
