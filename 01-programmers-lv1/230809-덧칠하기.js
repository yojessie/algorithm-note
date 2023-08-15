// 연습문제 - 덧칠하기
// https://school.programmers.co.kr/learn/courses/30/lessons/161989#

// 2023-08-09
function solution(n, m, section) {
  let count = 0;
  for (let i = section[0] - 1; i < n; ) {
    if (!section.includes(i + 1)) i++;
    else {
      count++;
      i += m;
    }
  }
  return count;
}
solution();
