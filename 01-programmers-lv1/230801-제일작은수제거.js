// 연습문제 - 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

// 2023-08-01
function solution(arr) {
  arr.sort((a, b) => b - a).pop();
  return arr.length !== 0 ? arr : [-1];
}
solution();
// 깔끔하게 풀었다고 넘어가려했는데 모든 케이스가 틀렸다.
// 질문 게시판을 보니 문제 이해가 조금 부족했다.
// 정답은 배열 내 원소의 순서를 바꾸지 않아야한다.

function solution2(arr) {
  const min = Math.min(...arr);
  const answer = arr.filter((x) => x !== min);
  return answer.length !== 0 ? answer : [-1];
}
solution2();
