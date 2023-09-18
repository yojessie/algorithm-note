// 스택/큐 - 프로세스
// https://school.programmers.co.kr/learn/courses/30/lessons/42587

// 2023-09-17
export function solution(priorities: number[], location: number) {
  let count = 0;
  while (priorities.length > 0) {
    const process = priorities.shift();
    if (process === Math.max(...priorities)) {
      priorities.shift();
      count += 1;
      if (location === 0) break;
      else location -= 1;
    } else {
      const process = Number(priorities.shift());
      priorities.push(process);
      if (location === 0) location = priorities.length;
      location -= 1;
    }
  }
  return count;
}
