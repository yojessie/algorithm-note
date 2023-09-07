// 연습문제 - 행렬의 곱셈
// https://school.programmers.co.kr/learn/courses/30/lessons/12949

// 2023-09-07
function solution(arr1, arr2) {
  const answer = [];
  for (const row of arr1) {
    const result = [];
    for (let i = 0; i < arr2[0].length; i++) {
      let sum = 0;
      for (let j = 0; j < arr2.length; j++) {
        sum += row[j] * arr2[j][i];
      }
      result.push(sum);
    }
    answer.push(result);
  }
  return answer;
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
