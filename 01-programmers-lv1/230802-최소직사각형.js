// 완전탐색 - 최소 직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// 2022-09-04
function solution(sizes) {
  let a = [];
  let b = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => a - b);
    a.push(sizes[i][0]);
    b.push(sizes[i][1]);
  }

  a.sort((a, b) => a - b);
  b.sort((a, b) => a - b);

  return a[a.length - 1] * b[b.length - 1];
}

// 2023-08-02
function solution(sizes) {
  let w = 0;
  let h = 0;
  sizes.map((x) => x.sort((a, b) => a - b));
  for (let i of sizes) {
    if (i[0] > w) w = i[0];
    if (i[1] > h) h = i[1];
  }
  return w * h;
}
