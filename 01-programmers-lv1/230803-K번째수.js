// 정렬 - K번째 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42748

// 2023-08-03
function solution(array, commands) {
  const answer = [];
  for (const num of commands) {
    const [i, j, k] = num;
    const result = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(result[k - 1]);
  }
  return answer;
}
solution();
