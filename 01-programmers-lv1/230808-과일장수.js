// 연습문제 - 과일장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 2023-08-08
function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  for (let i = m - 1; i < score.length; i += m) answer += score[i] * m;
  return answer;
}
