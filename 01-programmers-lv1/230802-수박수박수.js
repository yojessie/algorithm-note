// 연습문제 - 수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

// 2022-08-23
function solution(n) {
  var answer = "";

  for (let i = 0; i < n; i++) {
    answer = i % 2 == 0 ? answer + "수" : answer + "박";
  }

  return answer;
}

// 2023-08-02
function solution(n) {
  let answer = "수";
  for (let i = 1; i < n; i++) {
    if (answer.at(-1) === "수") answer += "박";
    else answer += "수";
  }
  return answer;
}

// 전과 비슷하게 풀었는데 다른답을 보니 반복한다는 점에서 repeat을 활용하는게 좋아보였다.

function solution(n) {
  return "수박".repeat(n).slice(0, n);
}
