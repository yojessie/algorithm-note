// 연습문제 - 평균구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

// 2022-08-18
function solution(arr) {
    var answer = 0;
  
    let sum = arr.reduce((a, b) => a + b);
    answer = sum / arr.length;
  
    return answer;
  }

// 2023-08-01
function solution(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur)
    return sum / arr.length
}