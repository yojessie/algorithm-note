// 연습문제 - 할인행사
// https://school.programmers.co.kr/learn/courses/30/lessons/131127

// 2023-09-08
function solution(want, number, discount) {
  let result = 0;
  const wantMap = new Map();
  for (let i = 0; i < want.length; i++) wantMap.set(want[i], number[i]);

  for (let j = 0; j <= discount.length - 10; j++) {
    const tenDays = discount.slice(j, j + 10);
    let count = 0;
    for (const item of want) {
      const itemCount = tenDays.filter((name) => name === item).length;
      const wantCount = wantMap.get(item);
      if (itemCount !== wantCount) break;
      count++;
    }
    if (count === want.length) result += 1;
  }
  return result;
}
solution();
