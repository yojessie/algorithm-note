// 2022 KAKAO BLIND RECRUITMENT - k진수에서 소수 개수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/92335#qna

// 2023-09-19 - 리팩토링
export function solution(number: number, radix: number) {
  return number.toString(radix).split("0").map(Number).filter(isPrime).length;
}

const isPrime = (num: number) => {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }

  return true;
};
