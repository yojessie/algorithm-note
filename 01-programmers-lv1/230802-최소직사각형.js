// 완전탐색 - 최소 직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 2023-08-02
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.map((x) => x.sort((a, b) => a - b));
  for (const i of sizes) {
    if (i[0] > w) w = i[0];
    if (i[1] > h) h = i[1];
  }
  return w * h;
}
solution();
