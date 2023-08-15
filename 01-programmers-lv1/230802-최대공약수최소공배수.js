// 연습문제 - 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

// 2023-08-02
// 최소공배수, 최대공약수를 구해야할때 사용하는 유클리드호제법
// 최대공약수(gcd)는 a를 b로 나눈 나머지 r, b를 r로 나눈 나머지 r0...
// 나머지를 계속 나머지로 나눠서 0이 될때까지 나눴을때 나누는수가 최대공약수가된다.
// 최소공배수는 a와 b를 곱해서 최대공약수로 나누면 된다.

function solution(n, m) {
  function getGcd(a, b) {
    if (b === 0) return a;
    return getGcd(b, a % b);
  }
  const gcd = getGcd(n, m);
  const lcm = (n * m) / gcd;

  return [gcd, lcm];
}
solution();
