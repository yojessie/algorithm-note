// 연습문제 - 가장 가까운 같은 문자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 2023-08-06
function solution(s) {
  const arr = [];
  const answer = [];
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i])) answer.push(i - arr.lastIndexOf(s[i]));
    else answer.push(-1);

    arr.push(s[i]);
  }
  return answer;
}
solution();
