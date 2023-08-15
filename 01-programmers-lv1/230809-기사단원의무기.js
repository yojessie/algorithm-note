// 연습문제 - 기사단원의 무기
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// 2023-08-09
function solution(number, limit, power) {
  const answer = [];
  for (let i = 1; i <= number; i++) {
    let count = 0;
    for (let j = 1; j * j <= i; j++) {
      if (j * j === i) count++;
      else if (i % j === 0) count += 2;
    }
    answer.push(count);
  }
  return answer.reduce((acc, cur) => {
    return cur > limit ? (acc += power) : (acc += cur);
  });
}
solution();
