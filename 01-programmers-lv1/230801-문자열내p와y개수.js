// 연습문제 - 문자열 내 p와 y의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 2023-08-01
function solution(s) {
  let answer = 0;
  const arr = s.toLowerCase().split("");
  for (const i of arr) {
    if (i === "p") answer++;
    else if (i === "y") answer--;
    else continue;
  }
  return answer === 0;
}
solution("pPoooyY");
// 이번에는 스택 알고리즘으로 풀어볼 수 있었다.
