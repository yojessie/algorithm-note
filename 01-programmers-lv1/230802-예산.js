// Summer/Winter Coding(~2018) - 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

// 2023-08-02
function solution(d, budget) {
  let count = 0;
  let sum = 0;
  const arr = d.sort((a, b) => a - b);
  for (const i of arr) {
    sum += i;
    count++;
    if (budget === sum) return count;
    if (budget < sum) return count - 1;
  }
  return d.length;
}
solution();
