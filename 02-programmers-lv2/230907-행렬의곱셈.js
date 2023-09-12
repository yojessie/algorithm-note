// Load the full build.
const _ = require("lodash");

// 연습문제 - 행렬의 곱셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12949

// 2023-09-12 리팩토링
function solution(matrix1, matrix2) {
  return matrix1.map((row) => {
    const column = _.range(matrix2[0].length);
    return column.map((i) =>
      row.reduce((sum, cur, j) => sum + cur * matrix2[j][i], 0)
    );
  });
}

console.log(
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
  )
);
