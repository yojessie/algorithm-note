// 연습문제 - 명예의 전당 1
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

// 2023-08-07
// map을 좀 더 적극적으로 활용해 보는 중
function solution(k, score) {
  let stage = [];
  return score.map((score, idx) => {
    stage.push(score);
    if (stage.length > k) {
      stage.sort((a, b) => b - a);
      stage.pop();
    }

    return Math.min(...stage);
  });
}
