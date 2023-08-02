// 2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 2022-09-07
function solution(s) {
  let txt = [
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

  while (isNaN(s)) {
    for (let i = 0; i < txt.length; i++) {
      s = s.replace(txt[i], i);
    }
  }

  return Number(s);
}

// 2023-08-02
function solution(s) {
  let words = [
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
