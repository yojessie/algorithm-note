// 완전탐색 - 피로도
// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// 2023-09-18
export function solution(k: number, dungeons: number[][]) {
  const getPermutations = (arr: number[], depth: number) => {
    const result: number[][] = [];
    if (depth === 1) return arr.map((x) => [x]);

    arr.forEach((fixed, idx, origin) => {
      const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
      const permutaions = getPermutations(rest, depth - 1);
      const attached = permutaions.map((x) => [fixed, ...x]);
      result.push(...attached);
    });
    return result;
  };

  const dungeonLength = dungeons.length;
  const lengthArr = new Array(dungeonLength).fill(0).map((_, i) => i);

  const perutation = getPermutations(lengthArr, dungeonLength);

  let answer = 0;
  for (const eachCase of perutation) {
    let count = 0;
    let tiredNow = k;
    for (const i of eachCase) {
      const [need, tired] = dungeons[i];
      if (tiredNow >= need) {
        tiredNow -= tired;
        count += 1;
      } else break;
    }
    if (count > answer) answer = count;
  }

  return answer;
}
