// 월간코드챌린지 시즌3 - 나머지가 1이되는 수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/87389

// 2022-08-28 풀이
function solution(n) {
    for (let i = 1; i <= n; i++) {
      if (n % i == 1) {
        return i;
      }
    }
  }

// 2023-07-31 풀이
function solution(n) {
    for (let i = 1; i < n; i++) {
        if (n % i === 1) return i
    }
}
// 이건 간단한 문제라 같은 풀이