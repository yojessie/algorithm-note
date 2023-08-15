// 해시 - 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

// 2023-04-04
function solution(p, c) {
  const table = new Map();
  p.forEach((e) => table.set(e, table.get(e) + 1 || 1));
  c.forEach((e) => table.set(e, table.get(e) - 1 || -1));

  for ([k, v] of table) {
    if (v === 1) return k;
  }
}
solution();
// 2023-08-04
// 이 문제는 못풀어서 4월에 풀었던 코드를 보고 해시테이블을 다시 공부해야했다.
