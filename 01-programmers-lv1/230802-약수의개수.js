// 월간 코드 챌린지 시즌2 - 약수의 개수와 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

// 2023-08-02
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let count = 1;
    for (let j = 2; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}
solution();

// 약수를 제곱근까지만 구하려다가 총 갯수를 구해야해서 n제곱 시간복잡도로 풀었다.
// 제한 숫자가 크지 않아서 문제가 되지는 않았는데
// 아쉬워서 다른사람 풀이를 보고 힌트를 얻어 다시 풀어본다.
// 제곱근이 정수면 약수의 갯수는 홀수개라고 한다.

function solution2(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) answer -= i;
    else answer += i;
  }
  return answer;
}
solution2();
