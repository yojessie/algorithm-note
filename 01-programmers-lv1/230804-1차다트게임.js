// 2018 KAKAO BLIND RECRUITMENT - [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

// 2022-08-27
// 이때는 해결을 못해서 결국 다른사람 풀이를 보며 공부한 다음에야 풀 수 있었던 문제
function solution(dartResult) {
  let score = [];
  let num = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i].match(/\d/g)) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        num = 10;
        i++;
      } else {
        num = dartResult[i];
      }
    } else if (dartResult[i] == "S") {
      score.push(Math.pow(num, 1));
    } else if (dartResult[i] == "D") {
      score.push(Math.pow(num, 2));
    } else if (dartResult[i] == "T") {
      score.push(Math.pow(num, 3));
    } else if (dartResult[i] == "*") {
      score[score.length - 1] *= 2;
      score[score.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      score[score.length - 1] *= -1;
    }
  }

  return score.reduce((acc, cur) => acc + cur);
}

// 2023-08-04
function solution(dartResult) {
  let arr = dartResult.split("");
  let answer = [];
  let now = 0;
  for (let i of arr) {
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
