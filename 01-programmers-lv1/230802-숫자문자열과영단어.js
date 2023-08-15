// 2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 2023-08-02
function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; i++) {
    s = s.replaceAll(words[i], i);
  }
  return Number(s);
}
solution();
