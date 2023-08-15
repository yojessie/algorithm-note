// 연습문제 - 약수의합
// https://school.programmers.co.kr/learn/courses/30/lessons/12928

// 2023-07-31 풀이
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer += i;
  }
  return answer;
}
solution(12);

// 저때는 어쩌다가 또 var를 썼을까?
// 알고리즘 문제를 풀때 var 선언을 한 예제가 많이 보여서 헷갈렸던 때..
