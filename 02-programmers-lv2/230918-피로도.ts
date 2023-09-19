// 완전탐색 - 피로도
// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 2023-09-19 - 리팩토링
export function solution(k: number, dungeons: number[][]) {
  const dungeonLength = dungeons.length;
  const lengthArr = new Array(dungeonLength).fill(0).map((_, i) => i);
  const permutation = getPermutations(lengthArr, dungeonLength);

  let answer = 0;
  for (const case_ of permutation) {
    let count = 0;
    let tiredNow = k;
    for (const i of case_) {
      const [need, tired] = dungeons[i];
      if (tiredNow < need) break;

      tiredNow -= tired;
      count += 1;
    }
    answer = Math.max(answer, count);
  }
  return answer;
}

const getPermutations = <T>(arr: T[], depth: number): T[][] => {
  if (depth === 0) return [[]];

  return arr.flatMap((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const permutaions = getPermutations(rest, depth - 1);
    const attached = permutaions.map((x) => [fixed, ...x]);
    return attached;
  });
};
