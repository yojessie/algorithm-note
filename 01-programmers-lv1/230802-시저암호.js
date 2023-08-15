// 연습문제 - 시저암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

// 2023-08-02
function solution(s, n) {
  const answer = [];
  const arr = s.split("");

  for (const i of arr) {
    let num = i.charCodeAt();

    if (i === i.toUpperCase() && num + n > 90) num -= 26;
    else if (i === i.toLowerCase() && num + n > 122) num -= 26;

    if (i === " ") answer.push(num);
    else answer.push(num + n);
  }

  return answer.map((x) => String.fromCharCode(x)).join("");
}
solution();
