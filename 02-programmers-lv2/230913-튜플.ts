// 2019 카카오 개발자 겨울 인턴십 - 튜플
// https://school.programmers.co.kr/learn/courses/30/lessons/64065

// 2023-09-13
function solution(s: string) {
  const tupleSet: number[][] = JSON.parse(
    s.replaceAll("{", "[").replaceAll("}", "]")
  );
  tupleSet.sort((a, b) => a.length - b.length);
  const answer: number[] = [];
  for (const set of tupleSet) {
    answer.push(...set);
  }
  return [...new Set(answer)];
}
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}"));
