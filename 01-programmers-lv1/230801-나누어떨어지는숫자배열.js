// 연습문제 - 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

// 2023-08-01
function solution(arr, divisor) {
  arr = arr.sort((a, b) => a - b);

  const answer = [];
  for (const i of arr) {
    if (i % divisor === 0) answer.push(i);
  }

  if (answer.length === 0) answer.push(-1);
  return answer;
}
solution([5, 9, 7, 10], 5);
// 전이랑 비슷한 로직인데 조금 다듬어 진 것 같다.
// 다른 정답코드를 보니 filter를 활용하는 방법도 있어서 다시 해봤다.

function solution2(arr, divisor) {
  arr = arr.sort((a, b) => a - b).filter((i) => i % divisor === 0);
  return arr.length !== 0 ? arr : [-1];
}
solution2([5, 9, 7, 10], 5);
// 유의미한 차이는 아니지만 속도는 filter 함수 쓴게 조금 더 빨랐다.(tc6)
