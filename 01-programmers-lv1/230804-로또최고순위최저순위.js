// 2021 Dev-Matching: 웹 백엔드 개발자(상반기) - 로또의 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

// 2023-08-04
function solution(lottos, winNums) {
  let count = 0;
  let hide = 0;
  for (const i of lottos) {
    if (winNums.includes(i)) count++;
    else if (i === 0) hide++;
  }
  const rank = [6, 6, 5, 4, 3, 2, 1];
  return [rank[count + hide], rank[count]];
}
solution();
