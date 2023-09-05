// 월간 코드 챌린지 시즌3 - n^2 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/87390

// 2023-08-31
// 아래 코드는 시간초과로 실패
function solution(n, left, right) {
  const arr = new Array(n).fill().map(() => Array(n).fill(0));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = Math.max(i, j) + 1;
    }
  }
  const answer = [];
  arr.map((v) => answer.push(...v));
  return answer.slice(left, right + 1);
}
solution(3, 2, 5);
