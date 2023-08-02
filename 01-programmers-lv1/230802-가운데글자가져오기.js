// 연습문제 - 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

// 2022-08-27
function solution(s) {
  let index = Math.floor(s.length / 2);

  return s.length % 2 == 0 ? s[index - 1] + s[index] : s[index];
}

//2023-08-02
function solution(s) {
  let answer = "";
  let idx = Math.floor(s.length / 2);
  if (s.length % 2 === 0) answer = s[idx - 1] + s[idx];
  else answer = s[idx];
  return answer;
}
