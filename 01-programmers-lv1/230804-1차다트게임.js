// 2018 KAKAO BLIND RECRUITMENT - [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

// 2023-08-04
function solution(dartResult) {
  const arr = dartResult.split("");
  const answer = [];
  let now = 0;
  for (const i of arr) {
    if (Number(i) === 0 && now === 1) now = 10;
    else if (Number(i) === parseInt(i)) now = Number(i);
    else if (i === "S") answer.push(now);
    else if (i === "D") answer.push(now ** 2);
    else if (i === "T") answer.push(now ** 3);
    else if (i === "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (i === "#") answer[answer.length - 1] *= -1;
  }

  return answer.reduce((acc, cur) => acc + cur);
}
solution();
