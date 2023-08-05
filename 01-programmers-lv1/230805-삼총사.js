// 연습문제 - 삼총사
// https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 2023-08-05
// 학생을 한명씩 뽑아 중복 없이 계산해야하므로 조합문제

function solution(number) {
  let count = 0;

  function gcb(arr, num) {
    let result = [];
    if (num === 1) return arr.map((x) => [x]);

    arr.forEach((cur, idx, arr) => {
      let rest = arr.slice(idx + 1);
      let combination = gcb(rest, num - 1);
      let attached = combination.map((x) => [cur, ...x]);
      result.push(...attached);
    });
    return result;
  }

  let answer = gcb(number, 3).map((x) => x.reduce((acc, cur) => acc + cur));
  for (let i of answer) if (i === 0) count++;
  return count;
}
