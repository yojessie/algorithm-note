// 완전탐색 - 모의고사
// https://school.programmers.co.kr/learn/courses/30/lessons/42840

// 2023-08-03
// 전에는 제대로 못풀고 결국 답을 보면서 공부했던 문제.
// 다른 로직이 있을까 이래저래 해봤는데 결국 전과 같은 로직으로 풀게됐다.
function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % one.length]) result[0]++;
    if (answers[i] === two[i % two.length]) result[1]++;
    if (answers[i] === three[i % three.length]) result[2]++;
  }

  const winner = Math.max(...result);
  const answer = [];
  for (let i = 0; i < 3; i++) {
    if (result[i] === winner) answer.push(i + 1);
  }
  return answer;
}
solution();
