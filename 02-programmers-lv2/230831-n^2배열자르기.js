// 월간 코드 챌린지 시즌3 - n^2 배열 자르기
// https://school.programmers.co.kr/learn/courses/30/lessons/87390

// 2023-09-06
function solution(n, left, right) {
  const answer = [];
  const startRow = Math.floor(left / n);
  const endRow = Math.floor(right / n);
  for (let i = startRow; i <= endRow; i++) {
    for (let j = 0; j < n; j++) {
      answer.push(Math.max(i, j) + 1);
    }
  }
  const startIdx = left % n;
  const endIdx = answer.length - (n - (right % n));
  return answer.slice(startIdx, endIdx + 1);
}
solution(3, 2, 5);
