// 연습문제 - 행렬의 곱셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12949

// 2023-09-07
function solution(arr1, arr2) {
  return arr1.map((row) => {
    return arr2[0].map((_, i) => {
      return row.reduce((sum, cur, j) => {
        return sum + cur * arr2[j][i];
      }, 0);
    });
  });
}
solution(
  [
    [1, 4],
    [3, 2],
    [4, 1],
  ],
  [
    [3, 3],
    [3, 3],
  ]
);
