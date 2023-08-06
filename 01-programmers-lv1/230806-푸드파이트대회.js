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

// 처음에 객체를 이용해서 풀려다가 잘 안돼서 위와 같이 풀었는데
// 다른사람 풀이를 보고 배워서 다시 풀어보았다.

function solution(s) {
  let hash = {};

  return [...s].map((v, i) => {
    let result = hash[v] !== undefined ? i - hash[v] : -1;
    hash[v] = i;
    return result;
  });
}
