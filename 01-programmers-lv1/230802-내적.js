// 월간 코드 챌린지 시즌1 - 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// 2023-08-02
function solution(a, b) {
  let answer = 0;
  for (let i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
solution();

// 내적이니까 말그대로 누산하는 reduce를 사용했으면 더 깔끔할 것 같다.
function solution2(a, b) {
  return a.reduce((acc, cur, i) => (acc += cur * b[i]), 0);
}
solution2();
