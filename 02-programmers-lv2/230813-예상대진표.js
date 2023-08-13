// 2017 탑스다운 - 예상 대진표
// https://school.programmers.co.kr/learn/courses/30/lessons/12985

// 2023-08-13
function solution(n, a, b) {
  for (let round = 1; round <= n / 2; round++) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    if (a === b) return round;
  }
}

// 부전승이 발생하지 않는 대결이므로
// a와 b의 다음라운드 순번은 2로 나눠 올림한 수가 된다
// 계산 후 a와 b의 순번이 같아지는 라운드를 반환한다
