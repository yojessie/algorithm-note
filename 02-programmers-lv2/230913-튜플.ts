// 2019 카카오 개발자 겨울 인턴십 - 튜플
// https://school.programmers.co.kr/learn/courses/30/lessons/64065

// 2023-09-19 - 리팩토링
export function solution(s: string) {
  const tuples = s
    .slice(2, s.length - 2)
    .replace(/\}\,\{/g, " ")
    .split(" ")
    .map((x) => x.split(",").map(Number));

  tuples.sort((a, b) => a.length - b.length);
  return [...new Set(tuples.flat())];
}
