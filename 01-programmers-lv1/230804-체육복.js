// 탐욕법(Greedy) - 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 2022-08-30
function solution(n, lost, reserve) {
  let answer = n - lost.length;
  let lostArr = lost.sort();
  let reserveArr = reserve.sort();

  for (let i = 0; i < lostArr.length; i++) {
    for (let j = 0; j < reserveArr.length; j++) {
      if (lostArr[i] == reserveArr[j]) {
        lostArr[i] = "본인것여분";
        reserveArr[j] = "본인것여분씀";
        answer++;
      }
    }
  }

  for (let i = 0; i < lostArr.length; i++) {
    for (let j = 0; j < reserveArr.length; j++) {
      if (lostArr[i] - 1 == reserveArr[j] || lostArr[i] + 1 == reserveArr[j]) {
        lostArr[i] = "빌림";
        reserveArr[j] = "빌려줌";
        answer++;
      }
    }
  }

  return answer;
}

// 2023-08-04
function solution(n, lost, reserve) {
  let newLost = lost
    .sort((a, b) => a - b)
    .filter((x) => {
      return !reserve.includes(x);
    });
  let newReserve = reserve
    .sort((a, b) => a - b)
    .filter((x) => {
      return !lost.includes(x);
    });

  let check = new Array(n).fill(true);
  for (let i of newLost) check[i - 1] = false;

  for (let k of newReserve) {
    if (!check[k - 2] && k - 2 >= 0) check[k - 2] = true;
    else if (!check[k] && k <= n - 1) check[k] = true;
  }

  return check.filter((x) => x).length;
}
