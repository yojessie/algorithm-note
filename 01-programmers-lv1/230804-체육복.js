// 탐욕법(Greedy) - 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 2023-08-04
function solution(n, lost, reserve) {
  const newLost = lost
    .sort((a, b) => a - b)
    .filter((x) => {
      return !reserve.includes(x);
    });
  const newReserve = reserve
    .sort((a, b) => a - b)
    .filter((x) => {
      return !lost.includes(x);
    });

  const check = new Array(n).fill(true);
  for (const i of newLost) check[i - 1] = false;

  for (const k of newReserve) {
    if (!check[k - 2] && k - 2 >= 0) check[k - 2] = true;
    else if (!check[k] && k <= n - 1) check[k] = true;
  }

  return check.filter((x) => x).length;
}
solution();
