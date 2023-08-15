// 연습문제 - 핸드폰 번호 가리기
// https://school.programmers.co.kr/learn/courses/30/lessons/12948

// 2023-08-01
function solution(phoneNumber) {
  const { length } = phoneNumber;
  const hide = "*".repeat(length - 4);
  const last = phoneNumber.slice(-4);
  return hide + last;
}
solution();
// 이번에는 더 간단하게 풀 수 있었다.
