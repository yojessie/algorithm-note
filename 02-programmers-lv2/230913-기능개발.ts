// 스택/큐 - 기능개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 2023-09-19 - 리팩토링
export function solution(progresses: number[], speeds: number[]) {
  const answer = [];

  while (progresses.length) {
    if (progresses[0] >= 100) {
      let count = 0;
      for (const progress of progresses) {
        if (progress < 100) break;
        count += 1;
      }
      progresses.splice(0, count);
      speeds.splice(0, count);
      answer.push(count);
    }

    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
  }
  return answer;
}
solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
