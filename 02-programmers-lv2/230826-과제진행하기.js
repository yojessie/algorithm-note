// 연습문제 - 과제 진행하기
// https://school.programmers.co.kr/learn/courses/30/lessons/176962

// 2023-08-26
function solution(plans) {
  for (const i of plans) {
    i[1] = i[1].split(":").map(Number);
    i[2] = Number(i[2]);
  }
  plans.sort((a, b) => {
    if (a[1][0] < b[1][0]) return -1;
    if (a[1][0] > b[1][0]) return 1;
    if (a[1][0] === b[1][0]) {
      if (a[1][1] < b[1][1]) return -1;
      if (a[1][1] > b[1][1]) return 1;
      return 0;
    }
  });

  const planMap = new Map();
  plans.map((v) => {
    const data = {
      time: {
        hour: v[1][0],
        minute: v[1][1],
      },
      play: v[2],
    };
    planMap.set(v[0], data);
  });

  const answer = [];
  const nameStack = [];

  for (let i = 0; i < plans.length; i++) {
    if (i === plans.length - 1) {
      answer.push(plans[i][0]);
      if (nameStack.length > 0) {
        for (let j = nameStack.length - 1; j >= 0; j--)
          answer.push(nameStack[j]);
      }
      break;
    }

    const now = planMap.get(plans[i][0]);
    const next = planMap.get(plans[i + 1][0]);

    const hourDiff = next.time.hour - now.time.hour;
    if (hourDiff === 1) now.play -= 60 - now.time.minute + next.time.minute;
    if (hourDiff === 0) now.play -= next.time.minute - now.time.minute;
    if (hourDiff >= 2)
      now.play -= 60 * hourDiff - now.time.minute + next.time.minute;

    const callBefore = (leftMinutes) => {
      if (nameStack.length === 0) return;

      const before = planMap.get(nameStack.at(-1));
      before.play += leftMinutes;
      if (before.play <= 0) answer.push(nameStack.pop());
      if (before.play < 0) callBefore(before.play);
    };

    if (now.play <= 0) answer.push(plans[i][0]);
    if (now.play < 0) callBefore(now.play);
    if (now.play > 0) nameStack.push(plans[i][0]);
  }

  console.log(answer);
}

solution([
  ["science", "12:40", "50"],
  ["music", "12:20", "40"],
  ["history", "14:00", "30"],
  ["computer", "12:30", "100"],
]);

// 생각의 과정
// https://buttercup-gargoyle-c70.notion.site/230826-99ee6514bba24fc99a9d304ee4b3b778?pvs=4
