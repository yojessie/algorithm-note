// 월간 코드 챌린지 시즌2 - 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

// 2023-08-01
function solution(absolutes, signs) {
  let answer = 0;
  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  return answer;
}
solution();
