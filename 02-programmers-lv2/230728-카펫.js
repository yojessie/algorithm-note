// 2023-08-12
// 완전탐색 > 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let sum = brown + yellow;

  for (let i = 3; i * i <= sum; i++) {
    if (sum % i === 0) {
      let [n, m] = [sum / i, i];
      if (brown === n * 2 + (m - 2) * 2) return [n, m];
    }
  }
}

// 멘토님 조언으로 리팩토링
// 두 반복문을 합쳐볼 수 있었다.
