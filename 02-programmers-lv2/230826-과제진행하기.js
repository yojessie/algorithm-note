// 연습문제 - 과제 진행하기
// https://school.programmers.co.kr/learn/courses/30/lessons/176962

// 리팩토링 : 2023-09-06
function solution(plans) {
  for (const i of plans) {
    i[1] = i[1].split(":").map(Number);
    i[2] = Number(i[2]);
  }
  plans.sort(([, a], [, b]) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  const planMap = new Map();
  plans.map((v) => {
    const data = {
      time: v[1][0] * 60 + v[1][1],
      play: v[2],
    };
    planMap.set(v[0], data);
  });

  const answer = [];
  const nameStack = [];

  for (let i = 0; i < plans.length - 1; i++) {
    const now = planMap.get(plans[i][0]);
    const next = planMap.get(plans[i + 1][0]);

    now.play -= next.time - now.time;

    if (now.play <= 0) {
      answer.push(plans[i][0]);
      if (now.play < 0) {
        let leftTime = now.play;
        for (let j = nameStack.length - 1; j >= 0; j--) {
          const before = planMap.get(nameStack[j]);
          before.play += leftTime;
          if (before.play <= 0) {
            answer.push(nameStack.pop());
            if (before.play < 0) leftTime = before.play;
          } else break;
        }
      }
    } else nameStack.push(plans[i][0]);
  }

  answer.push(plans[plans.length - 1][0]);
  while (nameStack.length > 0) answer.push(nameStack.pop());

  console.log(answer);
}

solution([
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
]);
