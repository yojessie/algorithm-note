// 월간 코드 챌린지 시즌2 - 괄호 회전하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76502

// 2023-08-30
function solution(s) {
  s = s.split("");
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    const rotate = [...s.slice(i, s.length), ...s.slice(0, i)];
    if (rotate[0] === ")" || rotate[0] === "]" || rotate[0] === "}") continue;
    const stack = [];
    for (const j of rotate) {
      if (j === ")" && stack.at(-1) === "(") stack.pop();
      else if (j === "]" && stack.at(-1) === "[") stack.pop();
      else if (j === "}" && stack.at(-1) === "{") stack.pop();
      else stack.push(j);
    }
    if (stack.length === 0) answer += 1;
  }
  return answer;
}
solution();
