// 월간 코드 챌린지 시즌1 - 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

// 2023-08-02
function solution(n) {
  const num = n.toString(3).split("").reverse().join("");
  return parseInt(num, 3);
}
solution();
