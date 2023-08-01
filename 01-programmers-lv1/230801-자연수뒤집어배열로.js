// 연습문제 - 자연수 뒤집어 배열로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12932

// 2022-08-20
function solution(n) {
  var answer = [];

  answer = n.toString().split("").reverse().map(Number);

  return answer;
}

// 2023-08-01
function solution(n) {
    return n.toString().split("").map(Number).reverse()
}