// 연습문제 - 콜라문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 2023-08-07
function solution(a, b, n) {
  let result = 0;
  let left = 0;
  let now = n;

  while (now >= a) {
    if (now % a !== 0) left = now % a;
    else left = 0;

    let temp = ((now - left) / a) * b;
    result += temp;
    now = temp + left;
  }

  return result;
}
