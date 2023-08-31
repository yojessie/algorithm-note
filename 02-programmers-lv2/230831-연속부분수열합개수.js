// 연습문제 - 연속 부분 수열 합의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/131701

// 2023-08-31
function solution(elements) {
  const answer = new Set();
  for (let i = 0; i < elements.length; i++) {
    const now = [
      ...elements.slice(i, elements.length),
      ...elements.slice(0, i),
    ];
    for (let j = 1; j < elements.length; j++) {
      const sum = now.slice(0, j).reduce((acc, cur) => acc + cur);
      answer.add(sum);
    }
  }
  answer.add(elements.reduce((acc, cur) => acc + cur));
  return [...answer].length;
}
solution([7, 9, 1, 1, 4]);
