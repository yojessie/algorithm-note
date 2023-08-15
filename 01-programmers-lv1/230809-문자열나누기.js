// 연습문제 - 문자열 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

// 2023-08-09
function solution(s) {
  let result = 0;
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (stack[0] === s[i] || stack.length === 0) stack.push(s[i]);
    else {
      stack.pop();
      if (stack.length === 0) result++;
    }
  }
  return stack.length !== 0 ? result + 1 : result;
}
solution();
