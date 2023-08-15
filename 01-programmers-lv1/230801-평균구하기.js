// 연습문제 - 평균구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12944

// 2023-08-01
function solution(arr) {
  const sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
}
solution();
