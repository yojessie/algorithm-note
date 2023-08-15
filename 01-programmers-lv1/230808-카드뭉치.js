// 연습문제 - 카드뭉치
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 2023-08-08
function solution(cards1, cards2, goal) {
  let idx1 = 0;
  let idx2 = 0;
  let answer = null;
  goal.forEach((word) => {
    if (cards1[idx1] === word) idx1++;
    else if (cards2[idx2] === word) idx2++;
    else answer = "No";
  });
  return answer ?? "Yes";
}
solution();
