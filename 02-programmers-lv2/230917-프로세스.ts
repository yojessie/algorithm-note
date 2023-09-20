// 스택/큐 - 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587

// 2023-09-19 - 리팩토링
export function solution(priorities: number[], location: number) {
  let count = 0;
  while (priorities.length) {
    if (priorities[0] === Math.max(...priorities)) {
      priorities.shift();
      count += 1;
      location -= 1;
      if (location < 0) break;
    } else {
      priorities.push(Number(priorities.shift()));
      if (location === 0) location = priorities.length;
      location -= 1;
    }
  }
  return count;
}
