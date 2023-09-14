// 스택/큐 - 기능개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

// 2023-09-13
function getDistributeDay(progresses: number[], speeds: number[]) {
  const answer = [];
  const dailyWork = (taskList: number[]) => {
    for (let i = 0; i < taskList.length; i++) {
      progresses[i] += speeds[i];
    }
  };

  while (progresses.length > 0) {
    if (progresses[0] >= 100) {
      let count = 0;
      for (const task of progresses) {
        if (task < 100) break;
        count += 1;
      }
      progresses.splice(0, count);
      speeds.splice(0, count);
      answer.push(count);
    }
    dailyWork(progresses);
  }
  return answer;
}
getDistributeDay([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
