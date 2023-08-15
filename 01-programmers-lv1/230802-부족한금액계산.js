// 위클리 챌린지 - 부족한 금액 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/82612

// 2023-08-02
function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum < money ? 0 : sum - money;
}
solution();
