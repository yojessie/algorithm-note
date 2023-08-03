// 연습문제 - 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

// 2022-08-27
function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  let num = new Date(`2016-${a}-${b}`).getDay();

  return day[num];
}

// 2023-08-03
function solution(a, b) {
  let day = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let idx = new Date(`2016-${a}-${b}`).getDay();
  return day[idx];
}
