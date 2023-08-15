// 연습문제 - 자릿수더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12931

// 2023-08-01
function solution(n) {
  let answer = 0;
  const arr = n.toString().split("").map(Number);
  for (const i of arr) {
    answer += i;
  }
  return answer;
}
solution();
// 반복문으로 계산한것과 reduce 함수를 이용한 것은 별 차이는 없었다.
// reduce가 누산을 목적으로 쓰는 함수이기때문에 reduce가 좀 더 적합했을까 싶다.

function solution2(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}
solution2();
