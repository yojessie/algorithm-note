// 연습문제 - 하샤드수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

// 2023-08-01
function solution(x) {
  const sum = x
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
  return x % sum === 0;
}
solution();
// 전에는 답까지 아주 돌아돌아 갔었구나..
