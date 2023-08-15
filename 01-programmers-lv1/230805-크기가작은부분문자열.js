// 연습문제 - 크기가 작은 부분 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

// 2023-08-05

function solution(t, p) {
  const numArr = [];
  let count = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    numArr.push(t.slice(i, i + p.length));
  }
  for (const i of numArr) if (Number(i) <= Number(p)) count++;
  return count;
}
solution();

// 다른사람 풀이를 보니 숫자 조합을 얻을때 한번에 count까지 할 수 있었겠다.
function solution2(t, p) {
  let count = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    const num = Number(t.slice(i, i + p.length));
    if (num <= Number(p)) count++;
  }
  return count;
}
solution2();
