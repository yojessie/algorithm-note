// 2022 KAKAO BLIND RECRUITMENT - k진수에서 소수 개수 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/92335#qna

// 2023-09-19
function solution(number: number, binary: number) {
  const isPrime = (num: number) => {
    if (num < 2) return false;
    if (num === 2) return true;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  let count = 0;
  const converted = number.toString(binary).split("0");
  for (let str of converted) {
    if (isPrime(Number(str))) count += 1;
  }
  return count;
}
