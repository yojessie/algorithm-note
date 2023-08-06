// 연습문제 - 푸드 파이트 대회
// https://school.programmers.co.kr/learn/courses/30/lessons/134240

// 2023-08-06
function solution(food) {
  let temp = "";
  for (let i = 1; i < food.length; i++) {
    if (food[i] <= 1) continue;
    else {
      temp += i.toString().repeat(Math.floor(food[i] / 2));
    }
  }
  return temp + "0" + temp.split("").reverse().join("");
}
