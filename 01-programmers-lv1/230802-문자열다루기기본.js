// 연습문제 - 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

// 2022-08-26
function solution(s) {
  arr = s.split("").map(Number);

  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return false;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr.length == 4 || arr.length == 6) {
      return true;
    } else {
      return false;
    }
  }
}

// 2023-08-02
// 처음에는 Number(s)의 타입을 확인하려고했는데
// 지수로 표현된 문자열때문에 안되는 코드였다.
// 그래서 parseInt로 변환했을때도 숫자이고, Number로 변환했을때도 앞과 동일한 값의 숫자가 됐을때를 조건으로 했다.
function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return parseInt(s) === Number(s);
  } else return false;
}
