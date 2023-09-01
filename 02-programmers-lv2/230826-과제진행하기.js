// 연습문제 - 과제 진행하기
// https://school.programmers.co.kr/learn/courses/30/lessons/176962

// 리팩토링 : 2023-09-01
function solution(plans) {
  for (const i of plans) {
    i[1] = i[1].split(":").map(Number);
    i[2] = Number(i[2]);
  }
  plans.sort((a, b) => {
    if (a[1][0] === b[1][0]) return a[1][1] - b[1][1];
    return a[1][0] - b[1][0];
  });

  const planMap = new Map();
  plans.map((v) => {
    const data = {
      hour: v[1][0],
      minute: v[1][1],
      play: v[2],
    };
    planMap.set(v[0], data);
  });

  const answer = [];
  const nameStack = [];

  for (let i = 0; i < plans.length - 1; i++) {
    const now = planMap.get(plans[i][0]);
    const next = planMap.get(plans[i + 1][0]);

    const hourDiff = next.hour - now.hour;
    if (hourDiff === 1) {
      now.play -= 60 - now.minute + next.minute;
    } else if (hourDiff === 0) {
      now.play -= next.minute - now.minute;
    } else {
      now.play -= 60 * hourDiff - now.minute + next.minute;
    }

    const callBefore = (leftMinutes) => {
      if (nameStack.length === 0) return;

      const before = planMap.get(nameStack.at(-1));
      before.play += leftMinutes;
      if (before.play <= 0) {
        answer.push(nameStack.pop());
        if (before.play < 0) callBefore(before.play);
      }
    };

    if (now.play <= 0) {
      answer.push(plans[i][0]);
      if (now.play < 0) callBefore(now.play);
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
