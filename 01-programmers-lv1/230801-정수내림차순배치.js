// 연습문제 - 정수 내림차순으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12933

// 2023-08-01
function solution(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join(""),
  );
}
solution();
// 배열로 만든 문자를 정렬하는 것과, 배열을 숫자로 바꿔서 정렬한것이 동일한 결과를 낸다.
